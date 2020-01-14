import {
  FETCH_AUTH,
  RECEIVE_AUTH,
  FAILED_AUTH,
  SUCCESS_AUTH,
  FETCH_LOGOUT_USER
} from 'store/types'

const initialState = {
  loading: false,
  userData: {},
  authorized: false,
  error: false,
  errorMessage: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        loading: true,
        authorized: false,
        error: false
      }
    case RECEIVE_AUTH:
      return {
        ...state,
        loading: false,
        authorized: true,
        error: false,
        errorMessage: '',
        userData: action.payload.userData
      }
    case SUCCESS_AUTH:
      return { ...state, loading: false }
    case FAILED_AUTH:
      return {
        ...state,
        loading: false,
        authorized: false,
        error: true,
        errorMessage: action.payload.error
      }
    case FETCH_LOGOUT_USER:
      return {
        ...state,
        loading: false,
        authorized: false,
        error: false,
        userData: {}
      }
    default:
      return state
  }
}
