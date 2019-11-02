import {
  FETCH_LOGIN_USER,
  RECEIVE_LOGIN_USER,
  FAILED_LOGIN_USER,
  LOGOUT_USER,
  SHOW_NOTIFICATION } from 'store/type'

export const initialState = {
  user: {
    loading: false,
    data: {},
  },
  notification: {
    onclick: false,
    loading: false,
    error: false,
    show: false,
    data: {}
  },
  aut: {
    loading: false,
    authorized: false,
    error: false,
    message: '',
    data: {}
  },
  loading: false,
  userData: {},
  authorized: false,
  error: false,
  errorMessage: '',
  showNotif: false
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case FETCH_LOGIN_USER:
      return Object.assign({}, state.auth, {
        loading: true,
        authorized: false,
        error: false,
        message: ''
      })
    case RECEIVE_LOGIN_USER:
      return Object.assign({}, state.auth, {
        loading: false,
        authorized: true,
        error: false,
        data: action.payload.userData
      })
    case FAILED_LOGIN_USER:
      return Object.assign({}, state.auth, {
        loading: false,
        authorized: false,
        error: true,
        message: action.payload.error
      })
    case LOGOUT_USER:
      return Object.assign({}, state.auth, {
        loading: false,
        authorized: false,
        error: false,
        data: {}
      })
    case SHOW_NOTIFICATION:
      return Object.assign({}, state.notification, {
        onclick: action.payload.onclick
      })
    default:
      return state;
  }
}