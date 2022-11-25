import { post } from "@/utils/http";

export const collectListQuery = (username: string, userId: string) => {
  const url = '/collection/query'
  return post(url, {username: username, userId: userId})
}