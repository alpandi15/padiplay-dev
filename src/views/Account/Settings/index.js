import React from 'react'
import { connect } from 'react-redux'

import Layout from '../index'

const Settings = (props) => {
  const {
    userData
  } = props
  return (
    <Layout>
      <div>Settings</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData,
  authorized: state.userStore.authorized
})

export default connect(mapStateToProps, null)(Settings)
