import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from 'layouts/partials/HeaderLogged'
import Sidebar from 'layouts/partials/sidebar'
import Notification from 'layouts/partials/notification'
import { getUserData } from 'actions/auth/loginAction'

const LayoutMember = (props) => {
  const { getUserData } = props
  useEffect(() => {
    const fetchUserToken = async () => {
      await getUserData()
    }
    fetchUserToken()
  }, [])

  return (
    <>
      <Header />
      <Sidebar />
      <Notification />
      <div className="wrapper-app">
        { props.children }
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData
})

const mapDispatchToProps = (dispatch) => ({
  getUserData: (data) => dispatch(getUserData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMember)
