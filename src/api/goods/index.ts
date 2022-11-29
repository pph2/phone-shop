import { post } from '@/utils/http'

export const getPhonesListQuery = (userId: string, type: string) => {
  const url = 'goods/query';
  return post(url, {userId: userId, type: type});
}