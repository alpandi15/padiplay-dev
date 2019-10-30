import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import InstagramLogin from 'react-instagram-login';


const responseFacebook = (response) => {
  console.log(response);
}

const responseGoogle = (response) => {
  console.log(response);
}

const responseInstagram = (response) => {
  console.log(response);
}

const Sosmed = () => {

  return (
    <div className="login-btn mt-3">
      <GoogleLogin
        clientId={'1080911581648-vcnjasi1kv81ho4hokp4hfeqbeea7tob.apps.googleusercontent.com'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      >
        <span> Login with Google</span>
      </GoogleLogin>

      <FacebookLogin
        appId="2435743850084417"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
  );
}

export default Sosmed;