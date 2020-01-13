import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './HeaderMenu'

const HeaderPublic = ({
  __handleShowSide
}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-app fixed-top">
      <div className="container">
        <div className="d-flex v-center">
          <div className="hamburger-menu d-block d-md-none ssm-toggle-nav" onClick={__handleShowSide}>
            <span />
            <span />
            <span />
          </div>
          <Link to="/" className="navbar-brand logo-app"><img src="../../assets/img/logo.png" alt="" /></Link>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-nav ml-auto v-center">
            <Menu />
            <li className="nav-item d-none d-md-block">
              <Link to="/login" className="btn btn-app btn-sm">Masuk</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderPublic
