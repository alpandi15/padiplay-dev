import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import HeaderPublic from 'layouts/partials/HeaderPublic'
import HeaderLogged from 'layouts/partials/HeaderLogged'
import Sidebar from 'layouts/partials/sidebar'
import Notification from 'layouts/partials/notification'
import { getUserData, logoutUser } from 'actions/auth/loginAction'

const Layout = ({ children, ...props }) => {
  const {
    getUserData,
    userData,
    authorized,
    logoutUser
  } = props

  useEffect(() => {
    const fetchUserToken = async () => {
      await getUserData()
    }
    fetchUserToken()
  }, [])

  const __signOut = () => {
    logoutUser()
  }

  if (authorized) {
    return (
      <>
        <HeaderLogged
          __signOut={__signOut}
          userData={userData}
        />
        <Sidebar />
        <Notification />
        <div className="wrapper-app">
          { children }
        </div>
      </>
    )
  }
  return (
    <>
      <HeaderPublic />
      <Sidebar />
      <Notification />
      <div className="wrapper-app">
        { children }
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData,
  authorized: state.userStore.authorized
})

const mapDispatchToProps = (dispatch) => ({
  getUserData: (data) => dispatch(getUserData(data)),
  logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
