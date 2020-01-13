import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'

import Calendar from 'components/Calendar'
import InputComponent from 'components/InputWithError'
import Radio from 'components/Radio'
import Button from 'components/Button'

import { convertDateToTimeStamp, convertTimeStampToDate } from '../../../utils/time'
import Layout from '../index'

const EditProfile = (props) => {
  const {
    handleSubmit,
    invalid,
    loading,
    submitting,
    userData
  } = props
  const [gender, setGender] = useState('1')

  useEffect(() => {
    setGender(String(userData.gender))
  })

  const radioItem = [
    { label: 'Laki - Laki', value: '1' },
    { label: 'Perempuan', value: '0' }
  ]

  const onSubmit = (data) => {
    if (data.birth) {
      data.birth = convertTimeStampToDate(data.birth)
    }
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
              <div className="titleList">First Name</div>
              <Field
                className="form-control"
                name="firstName"
                type="text"
                component={InputComponent}
                placeholder="First Name"
              />
              <div className="titleList">Last Name</div>
              <Field
                className="form-control"
                name="lastName"
                type="text"
                component={InputComponent}
                placeholder="Last Name"
              />
              <div className="titleList">Jenis Kelamin</div>
              {
                radioItem.map((data, key) => {
                  return (
                    <div className="field-container" key={key}>
                      <Field
                        id={data.value}
                        name="gender"
                        label={data.label}
                        component={Radio}
                        className="form-check-input"
                        checked={data.value === gender}
                        handleClick={() => setGender(data.value)}
                      />
                    </div>
                  )
                })
              }
              <div className="titleList">Tanggal Lahir</div>
              <Field
                name="birth"
                component={Calendar}
                className="form-control"
                placeholder="DD-MM-YYYY"
              />
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
              <div className="titleList">Address</div>
              <Field
                className="form-control"
                name="address"
                type="text"
                component={InputComponent}
                placeholder="address"
              />

              <Button
                className="btn btn-app btn-login"
                type="submit"
                invalid={invalid}
                submitting={submitting}
                loading={loading}
                label="Ubah"
              />
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
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      gender: String(userData.gender),
      birth: userData && userData.birth ? convertDateToTimeStamp(userData.birth) : null
    })
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'EditForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
  // validate
})(EditProfile))
