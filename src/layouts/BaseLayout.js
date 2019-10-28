import React from 'react';

import Header from 'layouts/partials/headers';
import Sidebar from 'layouts/partials/sidebar';
import Notification from 'layouts/partials/notification';

const BaseLayout = ({
  ...props
}) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Notification />
      {props}
    </div>
  );
}