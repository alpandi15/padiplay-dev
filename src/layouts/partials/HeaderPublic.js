import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './HeaderMenu'

const HeaderPublic = () => {
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

        <div className="navbar-menu">
          <ul className="navbar-nav ml-auto v-center">
            <Menu />

            <li className="nav-item dropdown d-none d-md-block">
              <a href="/" className="btn btn-app login dropdown-toggle btn-sm" id="loginDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Log in</a>
              <div className="dropdown-menu login" aria-labelledby="loginDropdownMenu">
                <form>
                  <div className="input-group mb-2">
                    <input className="form-control form-app form-control-sm" type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="input-group mb-2">
                    <input className="form-control form-app form-control-sm" type="password" name="password" placeholder="Password" />
                  </div>
                  <div className="login-option d-flex">
                    <div className="form-check mr-auto">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label className="form-check-label text-white font-10" htmlFor="defaultCheck1">
                      Remember Me
                      </label>
                    </div>
                    <div className="forget">
                      <a href="/" className="font-10">Forget Password</a>
                    </div>
                  </div>
                  <div className="login-btn mt-3">
                    <button className="btn btn-app btn-sm btn-block" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="/login" className="btn btn-app btn-sm">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderPublic
