import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import HeaderPublic from 'layouts/partials/HeaderPublic'
import HeaderLogged from 'layouts/partials/HeaderLogged'
import Sidebar from 'layouts/partials/Sidebar'
import Notification from 'layouts/partials/Notification'
import { getUserData, logoutUser } from 'actions/auth/loginAction'

const Layout = ({ children, ...props }) => {
  const [showSide, setShowSide] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
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
  }, [getUserData])

  const __signOut = () => {
    logoutUser()
  }

  const __handleShowNotif = () => {
    setShowNotif(!showNotif)
  }

  const __handleShowSide = () => {
    setShowSide(!showSide)
    console.log(showSide)
  }

  if (authorized) {
    return (
      <>
        <HeaderLogged
          __signOut={__signOut}
          __handleShowNotif={__handleShowNotif}
          __handleShowSide={__handleShowSide}
          userData={userData}
        />
        <Sidebar __signOut={__signOut} data={userData} show={showSide} __handleShowSide={__handleShowSide} />
        <Notification
          active={showNotif}
          __handleShowNotif={__handleShowNotif}
        />
        <div className="wrapper-app">
          { children }
        </div>
      </>
    )
  }
  return (
    <>
      <HeaderPublic
        __handleShowSide={__handleShowSide}
      />
      <Sidebar show={showSide} __handleShowSide={__handleShowSide} />
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
