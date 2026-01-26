📦 Sistema de Controle de Estoque

Aplicação completa de controle de estoque, desenvolvida para portfólio profissional júnior.
O projeto demonstra domínio em React, Spring Boot e PostgreSQL, implementando autenticação JWT, validações robustas, e uma interface moderna baseada no Material Design (Google).

🧭 Visão Geral

O sistema permite que usuários:

Criem contas com segurança;

Gerenciem produtos com controle de status e estoque mínimo;

Realizem movimentações de entrada e saída de estoque;

Consultem saldos, alertas e histórico detalhado.

Tudo isso dentro de uma arquitetura limpa e escalável, com comunicação entre front-end e back-end via API RESTful.

🚀 Stack Principal
Camada	Tecnologias
Front-end	React 18, Material UI, Axios, React Router
Back-end	Java 17+, Spring Boot 3, Spring Security, Spring Data JPA
Banco de Dados	PostgreSQL
Autenticação	JWT (JSON Web Token)
Arquitetura	REST API + Front SPA (Single Page Application)
ID e Exclusão	UUID4 + Soft Delete
🧩 Funcionalidades Principais
👤 Criação de Conta

História:

Como visitante, quero criar minha conta informando nome, e-mail e senha, para acessar o sistema com meus dados protegidos.

Front-end:

Tela /cadastro com campos obrigatórios:

Nome

E-mail (formato válido e único)

Senha (mín. 6 caracteres, 1 maiúscula, 1 minúscula, 1 especial)

Confirmação de senha

Validação de formulário e mensagens de erro;

Feedback visual de loading: “Criando conta...”;

Tratamento de erros (e-mail duplicado, falha do servidor);

Padrão visual: Material Design.

Back-end:

Registro com:

E-mail único;

Hash de senha (BCrypt);

ID em formato UUID4;

Soft delete e data de alteração;

Criação de usuário com papel padrão (“USER”).

🔐 Login e Autenticação

Histórias:

Como usuário, quero logar para acessar o sistema com segurança.

Como usuário, quero sair para proteger meus dados.

Como admin, quero ver quem criou o quê (auditoria simples).

Front-end:

Tela /login com campos de e-mail e senha;

Rotas públicas e privadas (ex.: /login, /produtos);

Persistência de sessão com JWT armazenado no localStorage;

Logout seguro e feedback visual de loading/erro.

Back-end:

Autenticação JWT com expiração configurada;

Middleware protegendo rotas privadas;

Auditoria básica registrando autor das ações.

📦 Gestão de Produtos

Histórias:

Como usuário, quero listar, criar, editar e inativar produtos.

Como usuário, quero buscar produtos por nome, SKU ou categoria.

Front-end:

Tela de listagem com tabela, busca e paginação (“carregar mais”);

Drawer de formulário para criar/editar produtos;

Componentes reutilizáveis:

InputText, InputNumber, Select, Button, Table, Alert;

Validações:

Nome e SKU obrigatórios;

Estoque mínimo ≥ 0;

Interface em Material Design.

Back-end:

Regras e validações:

SKU único;

Nome obrigatório;

Estoque mínimo ≥ 0;

Operações CRUD com soft delete;

Registro de data de alteração e auditoria.

🔄 Movimentação de Estoque

Histórias:

Como usuário, quero registrar entrada e saída de estoque.

Como usuário, quero que o sistema impeça saídas acima do saldo.

Como usuário, quero ver o saldo atualizado após cada movimentação.

Front-end:

Tela “Movimentações”:

Listagem com filtros (produto, tipo, período);

Botão “Nova movimentação”;

Formulário com validações:

Produto obrigatório;

Tipo (ENTRADA / SAÍDA);

Quantidade > 0;

Feedback visual:

Atualiza saldo do produto na UI;

Mensagem de sucesso/erro.

Back-end:

Regras de negócio:

Se tipo = SAÍDA e quantidade > saldo_atual → erro 400 (“Saldo insuficiente”);

Modelo de dados:

Tabela de movimentações com data/hora, tipo e motivo;

Saldo calculado por soma ou armazenado em tabela de estoque;

Atualização automática dos saldos a cada operação.

📊 Consulta de Estoque e Histórico

Histórias:

Como usuário, quero ver o saldo atual de cada produto.

Como usuário, quero ver alerta de estoque baixo.

Como usuário, quero abrir o produto e consultar o histórico completo de movimentações.

Front-end:

Na listagem de produtos:

Coluna de Saldo Atual;

Badge/alerta de “Estoque Baixo” (saldo ≤ estoque mínimo);

Página de detalhes:

Dados completos do produto;

Tabela de histórico de movimentações.

Back-end:

Endpoints unificados trazendo dados de:

Produtos;

Movimentações;

Saldos de estoque;

Critérios:

Produtos com saldo ≤ estoque mínimo aparecem destacados;

Histórico sincronizado com movimentações realizadas.

🧱 Arquitetura Geral
frontend/
 ├── src/
 │   ├── components/      # Inputs, Buttons, Tables...
 │   ├── pages/           # Login, Cadastro, Produtos, Movimentações...
 │   ├── services/        # API com Axios
 │   ├── contexts/        # AuthContext, ToastContext...
 │   └── utils/           # Validações e helpers
backend/
 ├── src/main/java/com/estoque/
 │   ├── controller/      # Endpoints REST
 │   ├── model/           # Entidades JPA
 │   ├── repository/      # JPA Repositories
 │   ├── service/         # Regras de negócio
 │   ├── config/          # Segurança e JWT
 │   └── dto/             # Transfer Objects
database/
 ├── schema.sql
 └── seed.sql (opcional)

⚙️ Como Executar o Projeto
🔧 Back-end
# Clone o repositório
git clone https://github.com/seuusuario/controle-de-estoque.git
cd controle-de-estoque/backend

# Configure o banco no arquivo application.yml
# Execute o servidor
./mvnw spring-boot:run

💻 Front-end
cd ../frontend

# Instale dependências
npm install

# Execute o app
npm run dev


Acesse:
👉 http://localhost:3000

🔒 Boas Práticas e Segurança

Hash de senha com BCrypt

Autenticação JWT com expiração

Proteção de rotas privadas

Soft delete em entidades sensíveis

Auditoria de alterações e ações do usuário

🧠 Próximos Passos

Dashboard com estatísticas e gráficos 📈

Controle de papéis (Admin / Usuário) 👥

Exportação de relatórios em PDF 📄

Testes automatizados com JUnit e Jest 🧪

Deploy no Render / Vercel ☁️

👨‍💻 Autor

Matheus Silveira
💼 Desenvolvedor Full Stack Jr.
🎯 Projeto de portfólio demonstrando integração completa entre front-end e back-end, boas práticas de arquitetura e foco em experiência do usuário.

📧 Contato: [seuemail@email.com
]
🔗 LinkedIn: [linkedin.com/in/seulinkedin]
🔗 GitHub: [github.com/seuusuario]

📄 Licença

Este projeto está sob a licença MIT — livre para uso e adaptação.
