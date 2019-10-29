import React from 'react';

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container">
        <div className="footer-wrapper-top">
          <div className="socmed">
            <ul>
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
          <div className="logo-footer mx-auto">
            <img src="../../assets/img/logo.png" />
          </div>
          <div className="contact">
            <ul>
              <li>
                <img src="../../assets/img/icon/icon-outline-phone.svg" className="icon-24" data-toggle="tooltip" data-placement="top" title="(021)-2221-4018" />
              </li>
              <li>
                <img src="../../assets/img/icon/icon-outline-email.svg" className="icon-24" data-toggle="tooltip" data-placement="top" title="info@padiplay.com" />
              </li>
              <li>
                <img src="../../assets/img/icon/icon-outline-location.svg" className="icon-24" data-toggle="tooltip" html="true" data-placement="top" title="Ruko Kebayoran Arcade 2, Jalan Boulevard Bintaro Jaya Sektor No.7, Pondok Jaya, Pondok Aren, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-wrapper-bottom py-3">
          <div className="d-flex v-center justify-content-center w-100">
            <div className="mr-2 font-12">Newsletter</div>
            <div className="form-group mb-0">
              <div className="form-inline">
                <input type="text" className="form-control form-app" name="newsletter" id="newsletter" placeholder="Your Email" />
                <button className="btn btn-app">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="credit py-3 d-flex">
          <div>
            <small>Copyright &copy; <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> Padiplay</small>
          </div>
          <div className="ml-auto font-12">
            <a href="#" className="mr-2">Term of use</a>
            <a href="#">Privacy Police</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;