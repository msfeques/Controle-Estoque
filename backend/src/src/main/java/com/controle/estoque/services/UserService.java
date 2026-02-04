package com.controle.estoque.services;

import com.controle.estoque.exception.EmailAlreadyExistsException;
import com.controle.estoque.model.User;
import com.controle.estoque.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public User registerUser(String username, String email, String password) {

        String normalizedEmail = email.trim().toLowerCase();

        if (userRepository.findByEmail(email).isPresent()) {
            throw new EmailAlreadyExistsException();
        }

        User user = new User();
        user.setUsername(email);
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(password));

        return userRepository.save(user);
    }
}
