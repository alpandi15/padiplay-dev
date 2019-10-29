import React, { useReducer, createContext } from 'react'

export const ContextStore = createContext();

const initialState = {
  loading: false,
  userData: {},
  authorized: false,
  error: false,
  errorMessage: ''
}

function reducer (state = initialState, action = {}) {
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
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextStore.Provider value={[ state, dispatch ]}>
      {props.children}
    </ContextStore.Provider>
  );
}