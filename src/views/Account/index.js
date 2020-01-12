import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import Layout from 'layouts'

import WallApp from 'assets/img/carousel/cover2-01.jpg'
import './styles.css'

const Account = (props) => {
  const {
    userData,
    children
  } = props

  return (
    <Layout>
      <div className="content-header detail">
        <img src={WallApp} className="browse-detail-cover" alt="" />
        <div className="container">
          <div className="d-flex v-center mobile">
            <div className="header-title">
              <div className="header-publisher font-12">
                <div>
                  <img src={userData && userData.image ? userData.image.raw : ''} className="organizer-avatar mr-2" alt="" />
                </div>
                <div>
                  Arcadia.Pro
                  {' '}
                  <span className="badge-app ml-2">Mobile</span>
                </div>
              </div>
              <a href="tournamentInformation.html" className="tournament-name">{`${userData.lastName} ${userData.firstName}`}</a>
              <div className="tournament-time font-12">
                {`Registered ${moment(userData.createdAt).format('DD-MM-YYYY')}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content information">
        <div className="game-browse py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div id="list-example" className="list-group">
                  <NavLink className="list-group-item list-group-item-action" activeClassName="active" to="/account/profile">Profil</NavLink>
                  <NavLink className="list-group-item list-group-item-action" activeClassName="active" to="/account/team">Tim</NavLink>
                  <NavLink className="list-group-item list-group-item-action" activeClassName="active" to="/account/tournament">Turnamen</NavLink>
                  <NavLink className="list-group-item list-group-item-action" activeClassName="active" to="/account/transaction">Riwayat Transaksi</NavLink>
                  <NavLink className="list-group-item list-group-item-action" activeClassName="active" to="/account/settings">Pengaturan</NavLink>
                </div>
              </div>
              <div className="col-9">
                {children}
              </div>
            </div>
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

export default connect(mapStateToProps, null)(Account)
