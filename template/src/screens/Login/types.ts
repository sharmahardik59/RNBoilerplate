import type { User } from "@models/User";

export interface LoginRequestData {
  password: string;
  username: string;
}

export default interface LoginResponse {
  data: User;
}
