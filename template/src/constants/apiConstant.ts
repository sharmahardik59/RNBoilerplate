import {BASE_API_URL} from "@env";

export const BASE_URL = BASE_API_URL;

const API_CONSTANT = {
  login: "auth/login",
  product: "/products",
  refreshToken: "auth/refreshToken",
  register: "users/add",
};

export default API_CONSTANT;