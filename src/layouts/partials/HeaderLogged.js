import React from 'react'

import { Link } from 'react-router-dom'

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
            <li className="nav-item d-block d-md-none active">
              <div className="text-center mb-1">
                <img src="../../assets/img/icon/icon-home.svg" className="icon-app icon-invert" alt="" />
              </div>
              <Link className="nav-link link-app" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-games.svg" className="icon-app icon-invert" alt="" />
              </div>
              <Link className="nav-link link-app" to="/games">Games</Link>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-organize.svg" className="icon-app icon-invert" alt="" />
              </div>
              <a className="nav-link link-app" href="../organizer/index.html">Organize</a>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-shop.svg" className="icon-app icon-invert" alt="" />
              </div>
              <a className="nav-link link-app" href="../shop/index.html">Shop</a>
            </li>
            <li className="nav-item d-block d-md-none">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-casterr.svg" className="icon-app icon-invert" alt="" />
              </div>
              <a className="nav-link link-app" href="../caster/index.html">Caster</a>
            </li>
            <li className="nav-item dropdown mr-3 d-none d-md-block">
              <div style={{ cursor: 'pointer' }} className="nav-link link-app dropdown-toggle more" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="../caster/index.html">Caster</a>
                <Link className="dropdown-item" to="/blog">Blog</Link>
                <Link className="dropdown-item" to="/about">About</Link>
              </div>
            </li>

            <li className="nav-item dropdown mr-3 d-none d-md-block">
              <a className="nav-link link-app dropdown-toggle notifications active" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">notifications_none</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right notifications" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item">
                  <div>Selamat email anda telah terverifikasi</div>
                  <div><small>30 Agustus 2019</small></div>
                </a>
                <a className="dropdown-item">
                  <div>
                    Pertandingan kamu selanjutnya melawan
                    {' '}
                    <b>Opponenet</b>
                    {' '}
                    pada tanggal 1 September 2019 13.00
                  </div>
                  <div><small>30 Agustus 2019</small></div>
                </a>
                <a className="dropdown-item">
                  <div>Registrasi anda pada Mobile Legend Bang Bang Tournament telah di setujui</div>
                  <div><small>30 Agustus 2019</small></div>
                </a>
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
