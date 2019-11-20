import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userStore from './reducer/userStore'

const rooterReducers = combineReducers({
  form: formReducer,
  userStore
})

export default rooterReducers
