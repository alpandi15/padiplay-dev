import React from 'react'

import HeaderPublic from 'layouts/partials/HeaderPublic'
import Sidebar from 'layouts/partials/sidebar'
import Notification from 'layouts/partials/notification'

const LayoutMember = (props) => {
  return (
    <>
      <HeaderPublic />
      <Sidebar />
      <Notification />
      <div className="wrapper-app">
        { props.children }
      </div>
    </>
  )
}

export default LayoutMember
