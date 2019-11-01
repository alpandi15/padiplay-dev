import React from 'react';

import { ContextStore } from 'store';
import { showNotif } from 'actions/notification/notifAction';
import HeaderProfile from 'layouts/partials/headerProfile';

const Header = (props) => {
  const [ state, dispatch ] = React.useContext(ContextStore);
  const showOrHide = () => {
    showNotif(!state.showNotif)(dispatch)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-app fixed-top">
      <div className="container">
        <div className="d-flex v-center">
          <div className="hamburger-menu d-block d-md-none ssm-toggle-nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="/" className="navbar-brand logo-app"><img src="../../assets/img/logo.png" alt=""/></a>
        </div>
        <div className="nav-item d-block d-md-none mr-3 notifications active" onClick={() => showOrHide()}>
          <i className="material-icons">notifications_none</i>
        </div>
  
        <div className="navbar-menu">
          <ul className="navbar-nav ml-auto v-center">
            <li className="nav-item d-block d-md-none active">
              <div className="text-center mb-1">
                <img src="../../assets/img/icon/icon-home.svg" className="icon-app icon-invert" alt=""/>
              </div>
              <a className="nav-link link-app" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-games.svg" className="icon-app icon-invert" alt=""/>
              </div>
              <a className="nav-link link-app" href="/games">Games</a>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-organize.svg" className="icon-app icon-invert" alt=""/>
              </div>
              <a className="nav-link link-app" href="../organizer/index.html">Organize</a>
            </li>
            <li className="nav-item">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-shop.svg" className="icon-app icon-invert" alt=""/>
              </div>
              <a className="nav-link link-app" href="../shop/index.html">Shop</a>
            </li>
            <li className="nav-item d-block d-md-none">
              <div className="text-center d-block d-md-none mb-1">
                <img src="../../assets/img/icon/icon-casterr.svg" className="icon-app icon-invert" alt=""/>
              </div>
              <a className="nav-link link-app" href="../caster/index.html">Caster</a>
            </li>
            <li className="nav-item dropdown mr-3 d-none d-md-block">
              <a className="nav-link link-app dropdown-toggle more" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="../caster/index.html">Caster</a>
                <a className="dropdown-item" href="blog.html">Blog</a>
                <a className="dropdown-item" href="about.html">About</a>
              </div>
            </li>

            {/* If not Login */}
            <HeaderProfile {...props}/>
            {/* If Login */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;