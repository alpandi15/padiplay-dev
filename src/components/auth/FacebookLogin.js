import React, { Component } from 'react'

import config from './config'

class FacebookLogin extends Component {
  componentDidMount () {
    (function (d, s, id) {
      let js; let
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: config.facebook,
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v5.0' // use version 2.1
      })
    }
  }

    facebookLogin = () => {
      window.FB.login(
        this.checkLoginState(),
        { scope: 'name,email,picture' } // Add scope whatever you need about the facebook user
      )

    //   window.FB.login(
    //     (resp) => {
    //       this.statusChangeCallback(resp)
    //     }, { scope: 'name,email,picture' }
    //   )
    }

    checkLoginState = () => {
      console.log('Checking login status...........')
      window.FB.getLoginStatus((response) => {
        console.log(response)
      })
    }

    /*
    statusChangeCallback = (response) => {
      console.log('statusChangeCallback')
      console.log(response)
      if (response.status === 'connected') {
        alert('Connected to facebook. Retriving user from fb')
        // Logged into your app and Facebook.
        this.fetchDataFacebook()
      } else if (response.status === 'not_authorized') {
        console.log('Import error', 'Authorize app to import data', 'error')
      } else {
        console.log('Import error', 'Error occured while importing data', 'error')
      }
    }
    */

    /*
    fetchDataFacebook = () => {
      console.log('Welcome!  Fetching your information.... ')

      window.FB.api('/me', (user) => {
        console.log(user)
        console.log(`Successful login from facebook : ${user.name}`)
        alert(`Successful login for: ${user.name}`)
      })
    }
    */

    render () {
      return (
        <button className="btn btn-app btn-login" onClick={() => this.facebookLogin()}>
          <span className="fa fa-facebook" />
          Masuk Dengan Facebook
        </button>
      )
    }
}

export default FacebookLogin
