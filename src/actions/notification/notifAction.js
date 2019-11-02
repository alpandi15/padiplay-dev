import { SHOW_NOTIFICATION } from 'store/type'

const show = (status) => {
  return { 
    type: SHOW_NOTIFICATION,
    payload: {
      onclick: status
    }
  };
}

const showNotif = (status) => (dispatch) => {
  dispatch(show(status))
}

export {
  showNotif
}