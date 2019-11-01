export const initialState = {
  loading: false,
  userData: {},
  authorized: false,
  error: false,
  errorMessage: '',
  showNotif: false
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN_USER':
      return Object.assign({}, state, {
        loading: true,
        authorized: false,
        error: false,
        errorMessage: ''
      })
    case 'RECEIVE_LOGIN_USER':
      return Object.assign({}, state, {
        loading: false,
        authorized: true,
        error: false,
        userData: action.payload.userData
      })
    case 'FAILED_LOGIN_USER':
      return Object.assign({}, state, {
        loading: false,
        authorized: false,
        error: true,
        errorMessage: action.payload.error
      })
    case 'FETCH_LOGOUT_USER':
      return Object.assign({}, state, {
        loading: false,
        authorized: false,
        error: false,
        userData: {}
      })
    case 'SHOW_NOTIFICATION':
      return Object.assign({}, state, {
        showNotif: action.payload.showNotif
      })
    default:
      return state;
  }
}