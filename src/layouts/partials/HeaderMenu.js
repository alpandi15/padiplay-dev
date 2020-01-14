import React from 'react'

import { NavLink } from 'react-router-dom'
import IconHome from 'assets/img/icon/icon-home.svg'
import IconGames from 'assets/img/icon/icon-games.svg'
import IconCommunity from 'assets/img/icon/icon-organize.svg'
import IconShop from 'assets/img/icon/icon-shop.svg'
import IconCaster from 'assets/img/icon/icon-casterr.svg'

const Menu = () => {
  const checkActive = (match, location) => {
    if (!location) return false
    const { pathname } = location
    console.log(pathname)
    return pathname === '/'
  }

  return (
    <>
      <NavLink activeClassName="active" isActive={checkActive} className="nav-item d-block d-md-none" to="/">
        <div className="text-center mb-1">
          <img src={IconHome} className="icon-app icon-invert" alt="" />
        </div>
        <div className="nav-link link-app">Home</div>
      </NavLink>
      <NavLink className="nav-item" activeClassName="active" to="/games">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconGames} className="icon-app icon-invert" alt="" />
        </div>
        <div className="nav-link link-app">Games</div>
      </NavLink>
      <NavLink className="nav-item" activeClassName="active" to="/organizer">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconCommunity} className="icon-app icon-invert" alt="" />
        </div>
        <div className="nav-link link-app">Community</div>
      </NavLink>
      <NavLink className="nav-item" activeClassName="active" to="/shop">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconShop} className="icon-app icon-invert" alt="" />
        </div>
        <div className="nav-link link-app">Shop</div>
      </NavLink>
      <NavLink className="nav-item d-block d-md-none" to="/caster" activeClassName="active">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconCaster} className="icon-app icon-invert" alt="" />
        </div>
        <div className="nav-link link-app">Caster</div>
      </NavLink>
      <div className="nav-item dropdown mr-3 d-none d-md-block">
        <div style={{ cursor: 'pointer' }} className="nav-link link-app dropdown-toggle more" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="../caster/index.html">Caster</a>
          <NavLink className="dropdown-item" to="/blog">Blog</NavLink>
          <NavLink className="dropdown-item" to="/about">About</NavLink>
        </div>
      </div>
    </>
  )
}

export default Menu
