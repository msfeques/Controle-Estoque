package com.controle.estoque.controller;

import com.controle.estoque.dto.RegisterRequest;
import com.controle.estoque.dto.UserResponse;
import com.controle.estoque.model.User;
import com.controle.estoque.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest request) {

        User user = userService.registerUser(
                request.getUsername(),
                request.getEmail(),
                request.getPassword()
        );

        UserResponse response = new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail()
        );

        return ResponseEntity.ok(response);
    }
}
