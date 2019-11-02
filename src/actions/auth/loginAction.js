import { apiLogin, apiGetProfile } from 'services/auth/loginService';
import { set } from 'services/utils/storage';

import {
  FETCH_LOGIN_USER,
  RECEIVE_LOGIN_USER,
  FAILED_LOGIN_USER,
  LOGOUT_USER} from 'store/type'

const fetch = () => {
  return { type: FETCH_LOGIN_USER };
}

const receive = (data) => {
  return {
    type: RECEIVE_LOGIN_USER,
    payload: {
      userData: data
    }
  }
}

const error = (status) => {
  return { 
    type: 'ERROR_STATUS'
  };
}

const logout = () => {
  return { type: LOGOUT_USER };
}

const failed = (error) => {
  return { 
    type: FAILED_LOGIN_USER,
    payload: {
      error: typeof error === 'object' ? error.message : error
    } 
  };
}

const getLoginData = (data) => async (dispatch) => {
  try {
    dispatch(fetch());
    const response = await apiLogin(data);
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        await set('userToken', response.data.token);
        return response;
      }
    } else {
      dispatch(failed(response));
      return response;
    }
  } catch (error) {
    dispatch(failed(error));
    return error;
  }
}

const getLoginSosmed = (data) => async (dispatch) => {
  try {
    dispatch(fetch());
    const response = await apiLogin(data);
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        await set('userToken', response.data.token);
        return response;
      }
    } else {
      dispatch(failed(response));
      return response;
    }
  } catch (error) {
    dispatch(failed(error));
    return error;
  }
}

const getUserData = () => async (dispatch) => {
  const response = await apiGetProfile()
  if (response.success) {
    dispatch(receive(response.data))
    return response;
  } else {
    dispatch(failed(response));
    return response;
  }
}

const errorStatus = () => async (dispatch) => {
  dispatch(error(false));
}

const logoutUser = () => async (dispatch) => {
  console.log(dispatch)
  dispatch(logout());
}

export {
  logoutUser,
  errorStatus,
  getLoginData,
  getLoginSosmed,
  getUserData
}