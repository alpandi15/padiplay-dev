import React from 'react';

const HeaderProfile = ({
  state
}) => {
  console.log(state);
  return (
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
  );
}

export default HeaderProfile;