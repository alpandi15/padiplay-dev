import React, { useEffect } from 'react';

import Header from 'layouts/partials/headers';
import Sidebar from 'layouts/partials/sidebar';
import Notification from 'layouts/partials/notification';

import { ContextStore } from 'store';
import { getUserData } from 'actions/auth/loginAction';

const LayoutMember = (props) => {
  const [ state, dispatch ] = React.useContext(ContextStore);

  const fetchUserToken = async () => {
   await getUserData()(dispatch);
  }

  useEffect(() => {
    fetchUserToken();
  }, []);

  console.log(state);
  return (
    <div>
      <Header {...state} />
      <Sidebar {...state} />
      <Notification />
      {props.children}
    </div>
  );
}

const LayoutPublic = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export {
  LayoutMember,
  LayoutPublic
}