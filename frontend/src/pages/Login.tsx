import { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import pcloginpage from "../assets/pcloginpage.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      {/* LADO DIREITO - FORMULÁRIO */}
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
            Bem-vindo de volta!
          </Typography>

          <Typography variant="h6" textAlign="center" color="text.secondary">
            Faça login para acessar sua conta
          </Typography>

          <TextField
            label="E-mail"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              py: 1.2,
              fontSize: "1rem",
              backgroundColor: "#0575E6",
              "&:hover": { backgroundColor: "#045bc2" },
            }}
          >
            Entrar
          </Button>

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            mt={2}
          >
            Não tem uma conta?{" "}
            <Link
              to="/Signup"
              style={{
                color: "#0575E6",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Cadastre-se
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
