import { request } from 'services/utils/request';

export async function apiLogin (data) {
  return request({
    url: 'auth/login',
    auth: false,
    data,
    method: 'post'
  })
}

export async function apiGetProfile () {
  return request({
    url: 'auth/me',
    auth: true,
    method: 'get'
  })
}