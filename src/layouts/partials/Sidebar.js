import React from 'react'
import { Link } from 'react-router-dom'
import AvatarDefault from 'assets/img/avatar.jpg'

const style = {
  active: {
    transitionDuration: '0.3s',
    transform: 'translate(0px, 0px)'
  },
  unactive: {
    transitionDuration: '0.3s',
    transform: 'translate(-280px, 0px)'
  }
}

const Sidebar = (props) => {
  const {
    data,
    show,
    __handleShowSide,
    __signOut
  } = props

  const defaultProfile = (evt) => {
    evt.target.src = AvatarDefault
  }

  return (
    <div className="sidebar-app d-md-none ssm-nav-visible" style={show ? style.active : style.unactive}>
      <div style={{ marginBottom: '20px' }}>
        <i className="material-icons mr-2" onClick={__handleShowSide}>close</i>
      </div>
      {data
        ? (
          <div className="profile">
            <div className="sidebar-avatar">
              <img src={data && data.image ? data.image.raw : null} alt="" onError={defaultProfile} />
              <div className="ml-3">
                <div><small>Selamat datang</small></div>
                <span>{data ? `${data.firstName} ${data.lastName}` : null}</span>
              </div>
            </div>
          </div>
        )
        : (
          <div className="profile">
            <div className="ml">
              <Link to="/login" className="btn btn-app btn-sm">Masuk</Link>
            </div>
          </div>
        )}

      <div className="sidebar-menu">
        {data
          ? (<Link to="/account/profile">Profile Saya</Link>)
          : null}
        <Link to="/tournament">Tournament</Link>
        <Link to="/blog">Blog</Link>
        <Link to="../helpcenter/index.html">Help Center</Link>
        <Link to="index">Privacy Police</Link>
        <Link to="index">Term of Use</Link>
        {data
          ? (
            <div className="d-flex v-center log-out" onClick={__signOut}>
              <i className="material-icons mr-2">exit_to_app</i>
              {'Log Out'}
            </div>
          ) : null}
      </div>
      <div className="sidebar-contact">
        <small className="sidebar-title">Contact</small>
        <ul>
          <li>
            <img src="../../assets/img/icon/icon-outline-phone.svg" className="icon-18 mr-2" alt="" />
            <span>(021)-2221-4018</span>
          </li>
          <li>
            <img src="../../assets/img/icon/icon-outline-email.svg" className="icon-18 mr-2" alt="" />
            <span>info@padiplay.com</span>
          </li>
        </ul>
      </div>
      <ul className="socmed">
        <li>
          <a href="/">
            <img src="assets/img/icon/icon-facebookv2.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="assets/img/icon/icon-twitterv2.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="assets/img/icon/icon-instagramv2.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="assets/img/icon/icon-youtubev2.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
