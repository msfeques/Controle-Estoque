package com.controle.estoque.exception;

public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException() {
        super("E-mail já cadastrado.");
    }
}
