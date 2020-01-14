import React from 'react'
import ContentLoader from 'react-content-loader'
import LayoutMember from 'layouts'
import Footer from 'layouts/partials/Footer'

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
                          <button type="submit" className="btn btn-app w-100 h-100 d-flex v-center justify-content-center">
                            <img alt="" src="../../assets/img/icon/icon-search.svg" className="icon-app icon-18" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-6 p-md-2">
                <ContentLoader
                  height={480}
                  speed={1}
                  primaryColor="#333"
                  secondaryColor="#999"
                  primaryOpacity={0.5}
                  secondaryOpacity={0.5}
                >
                  <rect x="0" y="0" width="400" height="480" />
                </ContentLoader>
              </div>
              <div className="col-md-3 col-6 p-md-2">
                <ContentLoader
                  height={480}
                  speed={1}
                  primaryColor="#333"
                  secondaryColor="#999"
                  primaryOpacity={0.5}
                  secondaryOpacity={0.5}
                >
                  <rect x="0" y="0" width="400" height="480" />
                </ContentLoader>
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
                <li><a className="disbale" href="/">{'>'}</a></li>
                <li><a className="active" href="/">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li>...</li>
                <li><a href="/">198</a></li>
                <li><a href="/">199</a></li>
                <li><a href="/">{'>'}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </LayoutMember>
  )
}

export default Games
