import { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";

import pcloginpage from "../assets/pcloginpage.png";
import EmailField from "../validation/EmailField";
import PasswordValidationField from "../validation/PasswordValidationField";

const API_URL = "http://localhost:8080/api";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleRegister() {
    setError(null);
    setSuccess(false);

    if (!username || !email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    if (!emailValid || !passwordValid) {
      setError("Verifique os dados informados");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API_URL}/register`, {
        username,
        email: email.toLowerCase(), 
        password,
      });

      setSuccess(true);

      setUsername("");
      setEmail("");
      setPassword("");
      setEmailValid(false);
      setPasswordValid(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;

        if (status === 409) {
          setError("E-mail já cadastrado");
        } else if (status === 400) {
          setError("Dados inválidos");
        } else {
          setError("Erro ao comunicar com o servidor");
        }
      } else {
        setError("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background: "#0575E6",
      }}
    >
      {/* LADO ESQUERDO */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={pcloginpage}
          alt="Ilustração sistema de estoque"
          sx={{
            width: "90%",
            maxWidth: 600,
            display: { xs: "none", md: "block" },
          }}
        />
      </Grid>

      {/* LADO DIREITO */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            p: { xs: 3, md: 5 },
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Bem-vindo!
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
          >
            Crie sua conta para começar a gerenciar seu estoque
          </Typography>

          <TextField
            label="Usuário"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <EmailField
            onChange={({ email, valid }) => {
              setEmail(email);
              setEmailValid(valid);
            }}
          />

          <PasswordValidationField
            onChange={({ password, valid }) => {
              setPassword(password);
              setPasswordValid(valid);
            }}
          />

          <Button
            variant="contained"
            size="large"
            disabled={!emailValid || !passwordValid || loading}
            onClick={handleRegister}
            sx={{
              mt: 2,
              py: 1.2,
              fontSize: "1rem",
              backgroundColor: "#0575E6",
              "&:hover": { backgroundColor: "#045bc2" },
            }}
          >
            {loading ? "Criando conta..." : "Registrar"}
          </Button>

          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}

          {success && (
            <Typography color="success.main" textAlign="center">
              Conta criada com sucesso!
            </Typography>
          )}

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            mt={2}
          >
            Já tem uma conta?{" "}
            <a
              href="/login"
              style={{
                color: "#0575E6",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Faça login
            </a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
