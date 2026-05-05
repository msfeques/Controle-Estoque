import { api } from "./api";

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export async function registerUser(payload: RegisterPayload) {
  const response = await api.post("/register", payload);
  return response.data;
}
