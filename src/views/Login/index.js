import React from 'react';

import 'views/Login/style.css';
import { LayoutPublic } from 'layouts/BaseLayout';
import FormLogin from 'views/Login/form';

const Login = () => {

  return (
    <LayoutPublic >
      <div className="wrapper-app">
        <div className="content login d-flex v-center justify-content-center" style={{minHeight: '100vh'}}>
          <div className="login-form col-md-8">
            <div className="logo p-4 mb-5 text-center text-md-left">
              <a href="/">
                <img src="../../assets/img/logo-white.png" alt=""/>
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

                <FormLogin />
                
              </div>
            </div>
          </div>
        </div>	
      </div>
    </LayoutPublic>
  );
}

export default Login;