import type { User } from "../api/loginApi";

export interface LoginResult {
  data: User;
  token: string;
}