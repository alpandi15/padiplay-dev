import React from 'react'
import { connect } from 'react-redux'

import Layout from '../index'

const Team = (props) => {
  const {
    userData
  } = props
  return (
    <Layout>
      <div>Team</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData,
  authorized: state.userStore.authorized
})

export default connect(mapStateToProps, null)(Team)
