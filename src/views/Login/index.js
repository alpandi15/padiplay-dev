import React, { useState, useEffect } from 'react';

import { ContextStore } from 'store';
import 'views/Login/style.css';
import validate from 'views/Login/validation';
import { getLoginData } from 'actions/auth/loginAction';
import { LayoutPublic } from 'layouts/BaseLayout';

import AlertComponent from 'components/Alert';

const Login = () => {
  const [ state, dispatch ] = React.useContext(ContextStore);

  const [ values, setValues ] = useState({
    username: '',
    password: '',
    loading: false
  });

  const [ touched, setTouched ] = useState({
    username: false,
    password: false
  });

  const [response, setResponse] = useState({
    showAlert: false,
    status: false,
    message: '',
    code: null,
    detail: '',
    data: {}
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = field => evt => {
    setTouched({
      ...touched,
      [field]: true
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setValues({
      ...values,
      loading: true
    })
    const { username, password } = values;

    const res = await getLoginData({username, password})(dispatch);
    
    setResponse({
      showAlert: true,
      status: res.success,
      message: !res.success ? res.message : res.meta.message
    });

    setValues({
      ...values,
      loading: false
    })
  };

  const errors = validate(values);
  const isDisabled = Object.keys(errors).some(x => errors[x]);

  const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = touched[field];
    return hasError ? shouldShow : false;
  }

  useEffect(() => {
    document.title = 'Login';

    return () => {
      if(response.status) window.location.href="/"
    }
  })

  const { loading } = values;

  return (
    <LayoutPublic >
      <div className="wrapper-app">
        <div className="content login d-flex v-center justify-content-center" style={{minHeight: '100vh'}}>
          <div className="login-form col-md-8">
            <div className="logo p-4 mb-5 text-center text-md-left">
              <a href="/">
                {/* <img src="../../assets/img/logo-white.png" /> */}
              </a>
            </div>
            <div className="box-shadow">
              <div className="row">
                <div className="col-md-6 p-5 cover-wrapper d-none d-md-none d-lg-block">
                  <div className="login-text">
                    <div className="font-20 font-bold text-uppercase" style={{letterSpacing: '3px'}}>
                      Selamat Datang
                      </div>
                    <div className="mb-3">
                      di Padiplay
                    </div>
                    <div style={{color: '#d0d0d0'}}>
                      <small>
                        <p>Padiplay memiliki dedikasi untuk pelaku esport.</p>

                        <p>Padiplay adalah platform untuk mempermudah penyelenggara untuk menjalankan suatu turnament esport, juga memberikan kemudahan kepada pemain untuk menumkan kompetisi esport.</p>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 p-5 form">
                  <div className="login-title mb-4"><b>Masuk</b> ke Akun Anda</div>
                  
                  <AlertComponent
                    show={response.showAlert}
                    variant={response.status ? "success" : "danger"}
                    title={response.status ? "Success: " : "Error: "}
                    message={response.message}
                    onClose={() => setResponse({...response, showAlert: false})}
                  />

                  <form onSubmit={handleSubmit}>
                    {shouldMarkError("username") ? <span style={{color: 'red'}}>{errors ? errors.username : ''}</span> : ""}
                    <div className={"input-group mb-3 " + (shouldMarkError("username") ? "error" : "")}>
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="material-icons">mail_outline</i></span>
                      </div>
                      <input className="form-control form-app"
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                        onBlur={handleBlur("username")}
                        placeholder="Email/Username" />
                    </div>

                    {shouldMarkError("password") ? <span style={{color: 'red'}}>{errors ? errors.password : ''}</span> : ""}
                    <div className={"input-group mb-3 " + (shouldMarkError("password") ? "error" : "")}>
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="material-icons">lock_open</i></span>
                      </div>
                      <input className="form-control form-app"
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        onBlur={handleBlur("password")}
                        placeholder="Password" />
                    </div>
                    <div className="login-option d-flex">
                      <div className="custom-control custom-switch mr-auto">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                      </div>
                      <div className="forget">
                        <a href="/"><small>Lupa Password</small></a>
                      </div>
                    </div>
                    <div className="login-btn mt-3">
                      <button className="btn btn-app btn-login" type="submit" disabled={isDisabled || loading}>
                        {loading ? 
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          : "Login" }
                      </button>
                    </div>
                    <div className="extra font-14 mt-2">
                      <span>Belum punya akun? <a href="register.html">Daftar Sekarang</a></span>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>	
      </div>
      </LayoutPublic>
  );
}

export default Login;