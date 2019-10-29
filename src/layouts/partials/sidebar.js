import React from 'react';
import { remove } from 'services/utils/storage';
import { logoutUser } from 'actions/auth/loginAction';
import { ContextStore } from 'store';

const Sidebar = (props) => {
  const [ state, dispatch ] = React.useContext(ContextStore);
  const { authorized, userData } = props;

  console.log('Autho ', authorized)
  const _signOutAsync = async () => {
    await remove('userToken');
    await logoutUser()(dispatch);
    window.location.reload()
  }

  return (
    <div className="sidebar-app d-md-none">
      <div className="profile">
        { authorized ?
          <div className="sidebar-avatar">
            <img src={userData.image.raw} />
            <div className="ml-3">
              <div><small>Selamat datang</small></div>
              <span>{userData.name}</span>
            </div>
          </div> 
          : null
        }
      </div>
      <div className="sidebar-menu">
        <a href="blog.html">Blog</a>
        <a href="../helpcenter/index.html">Help Center</a>
        <a href="index">Privacy Police</a>
        <a href="index">Term of Use</a>
        {
          authorized ? 
            (
              <a className="d-flex v-center log-out" href="#" onClick={() => _signOutAsync()}>
                <i className="material-icons mr-2">exit_to_app</i> Log Out
              </a>
            ) : (
              <a className="d-flex v-center log-out" href="/login">
                <i className="material-icons mr-2">exit_to_app</i> Log In
              </a>
            )
        }
      </div>
      <div className="sidebar-contact">
        <small className="sidebar-title">Contact</small>
        <ul>
          <li>
            <img src="../../assets/img/icon/icon-outline-phone.svg" className="icon-18 mr-2" />
            <span>(021)-2221-4018</span>
          </li>
          <li>
            <img src="../../assets/img/icon/icon-outline-email.svg" className="icon-18 mr-2" />
            <span>info@padiplay.com</span>
          </li>
        </ul>
      </div>
      <ul className="socmed">
        <li>
          <a href="#">
            <img src="../../assets/img/icon/icon-facebookv2.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/icon/icon-twitterv2.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/icon/icon-instagramv2.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/icon/icon-youtubev2.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;