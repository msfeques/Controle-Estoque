# 📦 Sistema de Controle de Estoque

Aplicação full stack para **gestão de estoque**, desenvolvida com **React**, **Spring Boot** e **PostgreSQL**.  
Este projeto faz parte do meu **portfólio profissional júnior**, demonstrando domínio em desenvolvimento web moderno, integração entre front-end e back-end, e boas práticas de arquitetura e segurança.

---

## 🚀 Objetivo

O sistema tem como objetivo permitir o **controle completo de produtos e movimentações de estoque**, com autenticação segura e interface intuitiva seguindo o **padrão visual da Google (Material Design)**.

---

## 🧰 Tecnologias Utilizadas

**Front-end**
- ⚛️ React  
- 🎨 Material UI (Google Design System)  
- 🌐 React Router  
- 🔗 Axios
- ✅ Validações em tempo real (email e senha)

**Back-end**
- ☕ Java 17+  
- 🚀 Spring Boot 3  
- 🔒 Spring Security (JWT)  
- 🧱 Spring Data JPA  
- 🐘 PostgreSQL  
- 📦 API REST
---

## 🧩 Funcionalidades Principais

### 👤 Cadastro de Usuário

- Endpoint: POST /api/register
- Validação de:
- Campos obrigatórios
- E-mail válido
- Senha forte
- Verificação de e-mail duplicado
- Retornos HTTP adequados (200, 400, 409)
- Integração completa Front ↔ Back com Axios

### 🖥️ Interface de Cadastro
- Formulário responsivo
#### Feedback visual:
- Erros personalizados
- Loading
- Mensagem de sucesso1
- Botão habilitado apenas com dados válidos
- Padrão visual Material Design

---
## 🗂️ Organização do Repositório
```
Controle-Estoque/
├── backend/   # API Spring Boot (branch: api)
└── frontend/  # Aplicação React (branch: app)
```
Branches principais:

- main → branch estável

- api → desenvolvimento do back-end

- app → desenvolvimento do front-end
---
## ⚙️ Status do Projeto

🛠️ **Em desenvolvimento**  
#### Próximos passos planejados:
- Autenticação com JWT
- Login de usuários
- Gestão de produtos
- Movimentações de estoque
- Controle de permissões
- Deploy

---

## 👨‍💻 Autor

**Matheus Silveira**  
💼 Desenvolvedor Full Stack Jr.  
🎯 Foco em projetos com arquitetura limpa, integração completa e experiência do usuário moderna.  

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — sinta-se à vontade para usar e modificar.

---
