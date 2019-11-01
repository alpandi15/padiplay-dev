import React, { Fragment, useState, useEffect, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useAlert } from "react-alert";

import validate from 'views/Login/validation';
import { getLoginData, getLoginSosmed } from 'actions/auth/loginAction';
import { ContextStore } from 'store';
import AlertComponent from 'components/Alert';

const FormLogin = () => {
  const alert = useAlert();
  const [ state, dispatch ] = useContext(ContextStore);
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

  const loginFacebook = async (resData) => {
    if (Object.prototype.hasOwnProperty.call(resData, 'error')) {
      setResponse({
        showAlert: true,
        status: false,
        message: resData.error
      });
    }

    if (Object.prototype.hasOwnProperty.call(resData, 'accessToken')) {
      const res = await getLoginSosmed({
        driver: 'facebook',
        token: resData.accessToken
      })(dispatch)

      setResponse({
        showAlert: true,
        status: res.success,
        message: !res.success ? res.message : res.meta.message
      });
      
      console.log('Response Service ', res)
    }

    console.log(resData);
  }
  
  const loginGoogle = async (resData) => {
    if (Object.prototype.hasOwnProperty.call(resData, 'error')) {
      setResponse({
        showAlert: true,
        status: false,
        message: resData.error
      });
    }

    if (Object.prototype.hasOwnProperty.call(resData, 'accessToken')) {
      const res = await getLoginSosmed({
        driver: 'google',
        token: resData.accessToken
      })(dispatch)

      setResponse({
        showAlert: true,
        status: res.success,
        message: !res.success ? res.message : res.meta.message
      });

      console.log('Response Service ', res)
    }
    console.log(resData);
  }

  const onFailureIntialGoogle = (error) => {
    console.log(error)
    alert.error('Error use login Social Media')
  }

  useEffect(() => {
    document.title = 'Login';
    if(response.status) window.location.href="/"
  }, [response.status])

  const { loading } = values;

  return (
    <Fragment>
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

          <div className="login-btn mt-3">

            <GoogleLogin
              clientId={'1080911581648-vcnjasi1kv81ho4hokp4hfeqbeea7tob.apps.googleusercontent.com'}
              onSuccess={loginGoogle}
              onFailure={onFailureIntialGoogle}
              render={renderProps => (
                <button {...renderProps} className="btn btn-danger btn-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <span className="fa fa-google"></span>
                  Login with Google
                </button>
              )}
            >
            </GoogleLogin>

            <FacebookLogin
              appId="2435743850084417"
              autoLoad={false}
              fields="name,email,picture"
              callback={loginFacebook}
              cssClass="btn btn-primary btn-login"
              icon="fa-facebook"
            />

          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default FormLogin;