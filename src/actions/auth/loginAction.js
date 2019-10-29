import { apiLogin, apiGetProfile } from 'services/auth/loginService';
import { set } from 'services/utils/storage';

const fetch = () => {
  return { type: 'FETCH_LOGIN_USER' };
}

const receive = (data) => {
  return {
    type: 'RECEIVE_LOGIN_USER',
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
  return { type: 'FETCH_LOGOUT_USER' };
}

const failed = (error) => {
  return { 
    type: 'FAILED_LOGIN_USER',
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

const getUserData = () => async (dispatch) => {
  const response = await apiGetProfile()
  if (response.success) {
    dispatch(receive(response.data))
  }
}

const errorStatus = () => async (dispatch) => {
  dispatch(error(false));
}

const logoutUser = () => async (dispatch) => {
  dispatch(logout());
}

export {
  logoutUser,
  errorStatus,
  getLoginData,
  getUserData
}