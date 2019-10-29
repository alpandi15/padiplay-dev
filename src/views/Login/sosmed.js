import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const Sosmed = () => {

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="login-btn mt-3">
      <GoogleLogin
        clientId="1080911581648-vcnjasi1kv81ho4hokp4hfeqbeea7tob.apps.googleusercontent.com"
        buttonText="Login by Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <FacebookLogin
        appId="475654502768987"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default Sosmed;