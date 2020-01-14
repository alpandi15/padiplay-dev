import React from 'react'

import { Link } from 'react-router-dom'

import Logo from 'assets/img/logo.png'
import AvatarDefault from 'assets/img/avatar.jpg'

import Menu from './HeaderMenu'

const HeaderPublic = ({
  userData,
  __signOut,
  __handleShowNotif,
  __handleShowSide
}) => {
  const defaultProfile = (evt) => {
    evt.target.src = AvatarDefault
  }
  return (
    <nav className="navbar navbar-expand-md navbar-app fixed-top">
      <div className="container">
        <div className="d-flex v-center">
          <div className="hamburger-menu d-block d-md-none ssm-toggle-nav" onClick={__handleShowSide}>
            <span />
            <span />
            <span />
          </div>
          <Link to="/" className="navbar-brand logo-app"><img src={Logo} alt="" /></Link>
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
                  <img src={userData.image ? userData.image.raw : null} onError={defaultProfile} alt="" />
                </div>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <span className="dropdown-item text-white mb-2">
                  <small>Selamat datang</small>
                  <div className="font-bold">{userData.name}</div>
                </span>
                <Link className="dropdown-item" to="/account/profile">Profil Saya</Link>
                <Link className="dropdown-item" to="/tournament">Tournament</Link>
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
