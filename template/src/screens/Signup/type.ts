import type { User } from "@models/User";

export interface SignupRequestData {
  email: string,
  name: string;
  password: string;
  username: string
}

export default interface SignupResponse {
  data: User;
}
