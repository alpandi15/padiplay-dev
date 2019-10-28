import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-app d-md-none">
      <div className="profile">
      <a href="/login" className="btn btn-app btn-sm">Login</a> 
      <a href="/login" className="btn btn-app btn-sm">Register</a>
      </div>
      <div className="sidebar-menu">
        <a href="blog.html">Blog</a>
        <a href="../helpcenter/index.html">Help Center</a>
        <a href="index">Privacy Police</a>
        <a href="index">Term of Use</a>
        {/* <a className="d-flex v-center log-out" href="#">
          <i className="material-icons mr-2">exit_to_app</i> Log Out
        </a> */}
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