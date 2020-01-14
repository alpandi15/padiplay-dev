import {
  apiLogin,
  apiGetProfile,
  apiRegister,
  apiLoginSosmed
} from 'services/auth/loginService'
import { set, remove } from 'services/utils/storage'

import {
  FETCH_AUTH,
  RECEIVE_AUTH,
  FAILED_AUTH,
  FETCH_LOGOUT_USER
} from 'store/types'

const fetch = () => {
  return { type: FETCH_AUTH }
}

const receive = (data) => {
  return {
    type: RECEIVE_AUTH,
    payload: {
      userData: data
    }
  }
}

const error = () => {
  return {
    type: 'ERROR_STATUS'
  }
}

const logout = () => {
  return { type: FETCH_LOGOUT_USER }
}

const failed = (error) => {
  return {
    type: FAILED_AUTH,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getLoginData = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    console.log('Data ', data)
    const response = await apiLogin(data)
    console.log('Res ', response)
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        await set('userToken', response.data.token)
        return response
      }
    } else {
      dispatch(failed(response))
      return response
    }
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

const getLoginSosmed = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiLoginSosmed(data)
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        await set('userToken', response.data.token)
        return response
      }
    } else {
      dispatch(failed(response))
      return response
    }
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

const getUserData = () => async (dispatch) => {
  const response = await apiGetProfile()
  if (response.success) {
    dispatch(receive(response.data))
    return response
  }
  // await remove('userToken')
  dispatch(failed(response))
  return response
}

const errorStatus = () => async (dispatch) => {
  dispatch(error(false))
}

const logoutUser = () => async (dispatch) => {
  await remove('userToken')
  dispatch(logout())
}

const registerUser = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    console.log('Data Masuk ', data)
    const response = await apiRegister(data)
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        return response
      }
    } else {
      dispatch(failed(response))
      return response
    }
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

export {
  logoutUser,
  errorStatus,
  getLoginData,
  getLoginSosmed,
  getUserData,
  registerUser
}
