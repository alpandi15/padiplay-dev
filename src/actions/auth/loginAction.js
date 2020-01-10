// import GoogleLogin from 'react-google-login'
import { apiLogin, apiGetProfile } from 'services/auth/loginService'
import { set, remove } from 'services/utils/storage'

import {
  FETCH_LOGIN_USER,
  RECEIVE_LOGIN_USER,
  FAILED_LOGIN_USER,
  FETCH_LOGOUT_USER
} from 'store/types'

const fetch = () => {
  return { type: FETCH_LOGIN_USER }
}

const receive = (data) => {
  return {
    type: RECEIVE_LOGIN_USER,
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
    type: FAILED_LOGIN_USER,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getLoginData = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiLogin(data)
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
    const response = await apiLogin(data)
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
  await remove('userToken')
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

// const LoginGoogle = async (navigation, props) => {
//   try {
//     GoogleLogin.signIn()
//     // await GoogleSignin.configure()
//     // await GoogleSignin.signOut()
//     // await GoogleSignin.signIn()
//     // const token = await GoogleSignin.getTokens()

//     // handleLogin(navigation, {
//     //   props,
//     //   expoSosmed: { type: 'success', ...token },
//     //   driver: 'google'
//     // })
//   } catch (error) {
//     await props.success()
//     console.log('Request Failed: ', error)
//     failed(error)
//   }
// }

export {
  logoutUser,
  errorStatus,
  getLoginData,
  getLoginSosmed,
  getUserData
}
