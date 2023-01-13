import { post } from "@/utils/http";

export const authLogin = (user_name: string, password: string) => {
  const url = 'test/login';
  return post(url, { user_name, password });
}

export const authRegister = (user_name: string, password: string, phone: string) => {
  const url = 'test/register';
  return post(url, { user_name, password, phone });
}