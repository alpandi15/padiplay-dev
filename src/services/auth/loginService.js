import { request } from 'services/utils/request'

export async function apiLogin (data) {
  console.log('Service ', data)
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

export async function apiLoginSosmed (data) {
  console.log('Service ', data)
  return request({
    url: 'auth/sosmed/login',
    auth: false,
    data,
    method: 'post'
  })
}
