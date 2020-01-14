import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Link } from 'react-router-dom'
import Layout from '../index'

const Profile = (props) => {
  const {
    userData
  } = props
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
            <div className="titleList">Lokasi</div>
            <div>{userData.address}</div>
            <div className="titleList">Jenis Kelamin</div>
            <div>{userData.gender ? 'Laki-Laki' : 'Perempuan'}</div>
            <div className="titleList">Tanggal Lahir</div>
            <div>{moment(userData.birth).format('DD-MM-YYYY')}</div>
            <div className="titleList">Phone Number</div>
            <div>{userData.phone}</div>
            <div className="titleList">Email</div>
            <div>{userData.email}</div>
          </div>
          <div className="col-12">
            <Link className="btn btn-app btn-login" to="/account/profile/edit">
            Ubah
            </Link>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'rgb(29, 37, 44)',
        padding: 20,
        marginTop: '10px'
      }}
      >
        <div className="row" style={{ narginTop: '10px' }}>
          <div className="col">
            <div className="titleList">Achievement</div>
          </div>
          <div className="col">
            <button
              className="btn btn-app btn-login"
              type="button"
            >
            Tambah Penghargaan
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData,
  authorized: state.userStore.authorized
})

export default connect(mapStateToProps, null)(Profile)
