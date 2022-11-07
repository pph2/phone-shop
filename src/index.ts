import { post } from "../../utils/http";

export const authLogin = (username: string, password: string) => {
  const url = 'login';
  return post(url, {username, password})
}