import { post } from "@/utils/http";

export const collectListQuery = (username: string, userId: string) => {
  const url = '/collection/query'
  return post(url, {username: username, userId: userId})
}

export const updateUserCollection = (userId: string, goodsId: string) => {
  const url = '/collection/update'
  return post(url, {userId: userId, goodsId: goodsId})
}

export const removeUserCollection = (userId: string, goodsId: string) => {
  const url = '/collection/remove'
  return post(url, {userId: userId, goodsId: goodsId})
}