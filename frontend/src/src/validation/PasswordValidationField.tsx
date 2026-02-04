import { useState } from "react";
import { TextField, Box } from "@mui/material";

interface PasswordValidationFieldProps {
  onChange?: (data: {
    password: string;
    confirm: string;
    valid: boolean;
  }) => void;
}

export default function PasswordValidationField({
  onChange,
}: PasswordValidationFieldProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  /**
   * @param field 
   * @param value
   */
  const handleChange = (field: "password" | "confirm", value: string) => {
    const newPassword = field === "password" ? value : password;
    const newConfirm = field === "confirm" ? value : confirm;

    setPassword(newPassword);
    setConfirm(newConfirm);

    const passwordStrong = passwordRegex.test(newPassword);

    const match = newPassword === newConfirm;

    if (!passwordStrong && newPassword.length > 0) {
      setError(true);

      if (newPassword.length < 6) {
        setMessage("A senha deve ter no mínimo 6 caracteres.");
      } else if (!/[A-Z]/.test(newPassword)) {
        setMessage("A senha deve conter pelo menos uma letra maiúscula.");
      } else if (!/[a-z]/.test(newPassword)) {
        setMessage("A senha deve conter pelo menos uma letra minúscula.");
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
        setMessage("A senha deve conter um caractere especial.");
      } else {
        setMessage("Senha inválida.");
      }
    }

    else if (newConfirm.length > 0 && !match) {
      setError(true);
      setMessage("As senhas não coincidem.");
    }

    else {
      setError(false);
      setMessage("");
    }

    onChange?.({
      password: newPassword,
      confirm: newConfirm,
      valid: passwordStrong && match,
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={error} 
      />

      <TextField
        label="Confirmar senha"
        type="password"
        variant="outlined"
        fullWidth
        value={confirm}
        onChange={(e) => handleChange("confirm", e.target.value)}
        error={error}
        helperText={message}
      />
    </Box>
  );
}
