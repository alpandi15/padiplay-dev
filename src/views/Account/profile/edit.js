import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import moment from 'moment'

import InputComponent from '../../../components/InputWithError'
import Layout from '../index'

const EditProfile = (props) => {
  const {
    handleSubmit,
    // invalid,
    // loading,
    // submitting,
    userData
  } = props

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <div style={{
        backgroundColor: 'rgb(29, 37, 44)',
        padding: 20
      }}
      >
        <div className="row">
          <div className="col-6">
            <h4>PROFIL</h4>
          </div>
          <div className="col-6">
            <span>90% kelengkapan profil anda</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="titleList">Lokasi</div>
              <Field
                className="form-control"
                name="location"
                type="text"
                component={InputComponent}
                placeholder="Lokasi"
              />
              <div className="titleList">Jenis Kelamin</div>
              <Field
                className="form-control"
                name="gender"
                type="text"
                component={InputComponent}
                placeholder="Lokasi"
              />
              <div className="titleList">Tanggal Lahir</div>
              <div>{moment(userData.birth).format('DD-MM-YYYY')}</div>
              <div className="titleList">Phone Number</div>
              <Field
                className="form-control"
                name="phone"
                type="text"
                component={InputComponent}
                placeholder="Nomor Telepon"
              />
              <div className="titleList">Email</div>
              <Field
                className="form-control"
                name="email"
                type="text"
                component={InputComponent}
                placeholder="Email"
              />

              <button
                className="btn btn-app btn-login"
                type="submit"
              >
              Ubah
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  const { userStore } = state
  const { userData } = userStore
  return {
    values: getFormValues('EditForm')(state),
    userData: userStore.userData,
    authorized: userStore.authorized,
    initialValues: ({
      location: userData.location,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      gender: String(userData.gender)
    })
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'EditForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
  // validate
})(EditProfile))
