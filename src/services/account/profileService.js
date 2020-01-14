import { request } from 'services/utils/request'

const apiEditProfile = async (data) => {
  return request({
    url: 'auth/edit-profile',
    auth: true,
    data,
    method: 'put'
  })
}

const apiChangePassword = async (data) => {
  return request({
    url: 'auth/change-password',
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiEditProfile,
  apiChangePassword
}
