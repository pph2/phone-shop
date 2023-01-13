import axios from 'axios';

axios.interceptors.request.use(
  config => {
    // 添加token
    const token = sessionStorage.getItem('token');
    if(token && token !== 'null') {
      config.headers && (config.headers['Authorization'] = token)
    }
    return config
  }
)

axios.interceptors.response.use(
  function(response) {
    if(!response.data) {
      return Promise.reject(response);
    }
    return response.data;
  }
)

export const get = (url: string, params: any, headers?: any) => {
  return axios({
    method: 'get',
    url,
    params,
    headers,
  })
}

export const post = (url: string, data: any, timeout = 10000) => {
  let backUrl = 'http://localhost:8080';
  return axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    timeout,
    baseURL: backUrl,
    url,
    data,
  })
}

export default { get, post };