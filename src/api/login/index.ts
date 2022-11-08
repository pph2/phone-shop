import { post } from "@/utils/http";

export const authLogin = (username: string, password: string) => {
  const url = '/login';
  return post(url, {username, password});
}

export const authRegister = (username: string, password: string, telephone: string) => {
  const url = '/register';
  return post(url, {username, password, telephone});
}