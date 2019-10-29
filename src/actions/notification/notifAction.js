import React from 'react';

const show = (status) => {
  return { 
    type: 'SHOW_NOTIFICATION',
    payload: {
      showNotif: status
    }
  };
}

const showNotif = (status) => (dispatch) => {
  dispatch(show(status))
}

export {
  showNotif
}