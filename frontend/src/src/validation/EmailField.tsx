import { useState } from "react";
import { TextField } from "@mui/material";

interface EmailFieldProps {
  onChange?: (data: { email: string; valid: boolean }) => void;
}
export default function EmailField({ onChange }: EmailFieldProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    const isValid = emailRegex.test(value);
    setError(!isValid && value.length > 0);
    onChange?.({ email: value, valid: isValid });
  };

  return (
    <TextField
      label="E-mail"
      variant="outlined"
      type="email"
      fullWidth
      value={email}
      onChange={handleChange}
      error={error}
      helperText={
        error ? "Digite um e-mail válido (ex: usuario@dominio.com)" : ""
      }
    />
  );
}
