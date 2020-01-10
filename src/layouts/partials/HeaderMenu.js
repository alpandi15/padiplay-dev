import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
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
        <Link className="nav-link link-app" to="/organizer">Community</Link>
      </li>
      <li className="nav-item">
        <div className="text-center d-block d-md-none mb-1">
          <img src="../../assets/img/icon/icon-shop.svg" className="icon-app icon-invert" alt="" />
        </div>
        <Link className="nav-link link-app" to="/shop">Shop</Link>
      </li>
      <li className="nav-item d-block d-md-none">
        <div className="text-center d-block d-md-none mb-1">
          <img src="../../assets/img/icon/icon-casterr.svg" className="icon-app icon-invert" alt="" />
        </div>
        <Link className="nav-link link-app" to="/caster">Caster</Link>
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
    </>
  )
}

export default Menu
