import React from 'react'

import { Link } from 'react-router-dom'

import Menu from './HeaderMenu'

const HeaderPublic = ({
  userData,
  __signOut,
  __handleShowNotif
}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-app fixed-top">
      <div className="container">
        <div className="d-flex v-center">
          <div className="hamburger-menu d-block d-md-none ssm-toggle-nav">
            <span />
            <span />
            <span />
          </div>
          <Link to="/" className="navbar-brand logo-app"><img src="../../assets/img/logo.png" alt="" /></Link>
        </div>
        <div className="nav-item d-block d-md-none mr-3 notifications active">
          <i className="material-icons" onClick={__handleShowNotif}>notifications_none</i>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-nav ml-auto v-center">
            <Menu />

            <li className="nav-item dropdown mr-3 d-none d-md-block">
              <a className="nav-link link-app dropdown-toggle notifications active" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">notifications_none</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right notifications" aria-labelledby="navbarDropdownMenuLink">
                <div className="dropdown-item">
                  <div>Selamat email anda telah terverifikasi</div>
                  <div><small>30 Agustus 2019</small></div>
                </div>
                <div className="dropdown-item">
                  <div>
                    Pertandingan kamu selanjutnya melawan
                    {' '}
                    <b>Opponenet</b>
                    {' '}
                    pada tanggal 1 September 2019 13.00
                  </div>
                  <div><small>30 Agustus 2019</small></div>
                </div>
                <div className="dropdown-item">
                  <div>Registrasi anda pada Mobile Legend Bang Bang Tournament telah di setujui</div>
                  <div><small>30 Agustus 2019</small></div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-md-block">
              <a className="nav-link link-app dropdown-toggle profile" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="avatar">
                  <img src="../../assets/img/avatar.jpg" alt="" />
                </div>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <span className="dropdown-item text-white mb-2">
                  <small>Selamat datang</small>
                  <div className="font-bold">{userData.name}</div>
                </span>
                <a className="dropdown-item" href="/">Profil Saya</a>
                <a className="dropdown-item" href="/">Tournament</a>
                <div className="dropdown-item d-flex v-center log-out" style={{ cursor: 'pointer' }} onClick={__signOut}>
                  <i className="material-icons mr-2">exit_to_app</i>
                  {' '}
                  Log Out
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderPublic
