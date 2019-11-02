import React from 'react';
import { remove } from 'services/utils/storage';
import { logoutUser } from 'actions/auth/loginAction';
import { ContextStore } from 'store';

const HeaderProfile = (props) => {
  const [ state, dispatch ] = React.useContext(ContextStore);
  const { authorized, data } = state;

  const _signOutAsync = async () => {
    await remove('userToken');
    await logoutUser()(dispatch);
    window.location.reload()
  }

  return !authorized ? (
    <>
      <li className="nav-item dropdown d-none d-md-block">
        <a href="#" className="btn btn-app login dropdown-toggle btn-sm" id="loginDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Log in</a>
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
                <a href="#" className="font-10">Forget Password</a>
            </div>
            </div>
            <div className="login-btn mt-3">
            <button className="btn btn-app btn-sm btn-block" type="submit">Login</button>
            </div>
          </form>
        </div>
      </li>
      <li className="nav-item d-none d-md-block">
          <a href="/login" className="btn btn-app btn-sm">Register</a>
      </li>
    </>
  ) : (
    <>
      <li className="nav-item dropdown mr-3 d-none d-md-block">
        <a className="nav-link link-app dropdown-toggle notifications active" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="material-icons">notifications_none</i>
        </a>
        <div className="dropdown-menu dropdown-menu-right notifications" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">
            <div>Selamat email anda telah terverifikasi</div>
            <div><small>30 Agustus 2019</small></div>
          </a>
          <a className="dropdown-item">
            <div>Pertandingan kamu selanjutnya melawan <b>Opponenet</b> pada tanggal 1 September 2019 13.00</div>
            <div><small>30 Agustus 2019</small></div>
          </a>
          <a className="dropdown-item">
            <div>Registrasi anda pada Mobile Legend Bang Bang Tournament telah di setujui</div>
            <div><small>30 Agustus 2019</small></div>
          </a>
        </div>
      </li>
      <li className="nav-item dropdown d-none d-md-block">
        <a className="nav-link link-app dropdown-toggle profile" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="avatar">
            <img src={data.image.raw} />
          </div>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <span className="dropdown-item text-white mb-2">
            <small>Selamat datang</small>
            <div className="font-bold">{data.name}</div>
          </span>
          <a className="dropdown-item" href="#">Profil Saya</a>
          <a className="dropdown-item" href="#">Tournament</a>
          <a className="dropdown-item d-flex v-center log-out" href="#" onClick={() => _signOutAsync()}>
            <i className="material-icons mr-2">exit_to_app</i> Log Out
          </a>
        </div>
      </li>
    </>
  );
}

export default HeaderProfile;