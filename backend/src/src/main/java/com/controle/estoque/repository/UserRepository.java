package com.controle.estoque.repository;

import com.controle.estoque.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    // Usuários ativos (default)
    Optional<User> findByEmail(String email);

    // Caso precise acessar deletados
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findAnyByEmail(@Param("email") String email);

    Optional<User> findByEmailAndDeletedAtIsNull(String email);
}
