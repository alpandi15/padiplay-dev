import React from 'react';

import { LayoutMember } from 'layouts/BaseLayout';

const Games = () => {
  return (
    <LayoutMember>
      <div className="content games">
        <div className="game-browse py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 px-md-2">
                <div className="title-app mb-3">
                  <span className="text-uppercase font-bold">Browse games</span>
                </div>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="row">
                    <div className="col-md-3 col-12 px-md-2">
                      <div className="form-group">
                        <select className="form-control form-app">
                          <option>All Category</option>
                          <option>FPS</option>
                          <option>SPORT</option>
                          <option>MOBA</option>
                          <option>STRATEGY</option>
                          <option>FIGHTING</option>
                          <option>CARD</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-12 px-md-2">
                      <div className="form-group">
                        <select className="form-control form-app">
                          <option>All Platforms</option>
                          <option>PC</option>
                          <option>PS4</option>
                          <option>XBOX</option>
                          <option>Mobile</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 px-md-2 mb-3 mb-md-0">
                      <div className="row m-0">
                        <div className="col-md-10 col-10 pl-0 pr-1">
                          <input type="text" className="form-control form-app" placeholder="Search Tournament" />
                        </div>
                        <div className="col-2 p-0">
                          <button type="submit" className="btn btn-app w-100 h-100 d-flex v-center justify-content-center"><img alt="" src="../../assets/img/icon/icon-search.svg" className="icon-app icon-18" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <div className="game-list">
                  <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                    <img alt="" src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                    <div className="game-title ellipsis">
                      <img alt="" src="../../assets/img/pubg.jpg" className="game-icon-app" />
                      <span>PUBG Mobile</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="pagination pb-5">
              <ul>
                <li><a className="disbale" href="">></a></li>
                <li><a className="active" href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li>...</li>
                <li><a href="">198</a></li>
                <li><a href="">199</a></li>
                <li><a href="">></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer pt-5">
          <div className="container">
            <div className="footer-wrapper-top">
              <div className="socmed">
                <ul>
                  <li>
                    <a href="#">
                      <img alt="" src="../../assets/img/icon/icon-facebookv2.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="" src="../../assets/img/icon/icon-twitterv2.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="" src="../../assets/img/icon/icon-instagramv2.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="" src="../../assets/img/icon/icon-youtubev2.svg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo-footer mx-auto">
                <img alt="" src="../../assets/img/logo.png" />
              </div>
              <div className="contact">
                <ul>
                  <li>
                    <img alt="" src="../../assets/img/icon/icon-outline-phone.svg" className="icon-24" data-toggle="tooltip" data-placement="top" title="(021)-2221-4018" />
                  </li>
                  <li>
                    <img alt="" src="../../assets/img/icon/icon-outline-email.svg" className="icon-24" data-toggle="tooltip" data-placement="top" title="info@padiplay.com" />
                  </li>
                  <li>
                    <img alt="" src="../../assets/img/icon/icon-outline-location.svg" className="icon-24" data-toggle="tooltip" html="true" data-placement="top" title="Ruko Kebayoran Arcade 2, Jalan Boulevard Bintaro Jaya Sektor No.7, Pondok Jaya, Pondok Aren, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224" />
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
      </div>
    </LayoutMember>
  );
}

export default Games;