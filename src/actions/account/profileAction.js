import { apiEditProfile } from 'services/account/profileService'
import {
  FETCH_AUTH,
  // RECEIVE_AUTH,
  FAILED_AUTH
//   SUCCESS_AUTH
} from 'store/types'


const fetch = () => {
  return {
    type: FETCH_AUTH
  }
}


// const receive = (data) => {
//   return {
//     type: RECEIVE_AUTH,
//     payload: {
//       data
//     }
//   }
// }

// const success = (success) => {
//   return {
//     type: SUCCESS_AUTH
//   }
// }

const failed = (error) => {
  return {
    type: FAILED_AUTH,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const updateProfile = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiEditProfile(data)
    console.log('Res ', response)
    if (response.success) {
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  updateProfile
}
