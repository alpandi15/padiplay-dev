import React, { useReducer, createContext } from 'react'
import {Reducer,initialState} from 'store/reducer';

export const ContextStore = createContext();
const { Provider } = ContextStore;

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Provider value={[ state, dispatch ]}>
      {props.children}
    </Provider>
  );
}