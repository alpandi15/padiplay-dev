import React from 'react'

import { NavLink } from 'react-router-dom'
import IconHome from 'assets/img/icon/icon-home.svg'
import IconGames from 'assets/img/icon/icon-games.svg'
import IconCommunity from 'assets/img/icon/icon-organize.svg'
import IconShop from 'assets/img/icon/icon-shop.svg'
import IconCaster from 'assets/img/icon/icon-casterr.svg'

const Menu = () => {
  return (
    <>
      <li className="nav-item d-block d-md-none">
        <div className="text-center mb-1">
          <img src={IconHome} className="icon-app icon-invert" alt="" />
        </div>
        <NavLink activeClassName="active" className="nav-link link-app" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconGames} className="icon-app icon-invert" alt="" />
        </div>
        <NavLink activeClassName="active" className="nav-link link-app" to="/games">Games</NavLink>
      </li>
      <li className="nav-item">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconCommunity} className="icon-app icon-invert" alt="" />
        </div>
        <NavLink className="nav-link link-app" to="/organizer">Community</NavLink>
      </li>
      <li className="nav-item">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconShop} className="icon-app icon-invert" alt="" />
        </div>
        <NavLink className="nav-link link-app" to="/shop">Shop</NavLink>
      </li>
      <li className="nav-item d-block d-md-none">
        <div className="text-center d-block d-md-none mb-1">
          <img src={IconCaster} className="icon-app icon-invert" alt="" />
        </div>
        <NavLink className="nav-link link-app" to="/caster">Caster</NavLink>
      </li>
      <li className="nav-item dropdown mr-3 d-none d-md-block">
        <div style={{ cursor: 'pointer' }} className="nav-link link-app dropdown-toggle more" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="../caster/index.html">Caster</a>
          <NavLink className="dropdown-item" to="/blog">Blog</NavLink>
          <NavLink className="dropdown-item" to="/about">About</NavLink>
        </div>
      </li>
    </>
  )
}

export default Menu
