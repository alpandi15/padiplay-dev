import React, { useEffect } from 'react';

import Header from 'layouts/partials/headers';
import Sidebar from 'layouts/partials/sidebar';
import Notification from 'layouts/partials/notification';

import { ContextStore } from 'store';
import { getUserData } from 'actions/auth/loginAction';

const LayoutMember = (props) => {
  const [ state, dispatch ] = React.useContext(ContextStore);

  useEffect(() => {
    const fetchUserToken = async () => {
     await getUserData()(dispatch);
    }

    fetchUserToken();
  }, [dispatch]);

  return (
    <>
      <Header {...state} />
      <Sidebar {...state} />
      <Notification />
      <div className="wrapper-app">
        {props.children}
      </div>
    </>
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