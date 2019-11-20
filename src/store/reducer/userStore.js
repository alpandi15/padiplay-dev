const initialState = {
  loading: false,
  userData: {},
  authorized: false,
  error: false,
  errorMessage: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_LOGIN_USER':
      return {
        ...state,
        loading: true,
        authorized: false,
        error: false
      }
    case 'RECEIVE_LOGIN_USER':
      return {
        ...state,
        loading: false,
        authorized: true,
        error: false,
        errorMessage: '',
        userData: action.payload.userData
      }
    case 'FAILED_LOGIN_USER':
      return {
        ...state,
        loading: false,
        authorized: false,
        error: true,
        errorMessage: action.payload.error
      }
    case 'FETCH_LOGOUT_USER':
      return {
        ...state,
        loading: false,
        authorized: false,
        error: false,
        userData: {}
      }
    case 'ERROR_STATUS':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}
