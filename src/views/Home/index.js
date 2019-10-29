import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Facebook } from 'react-content-loader'

import { ContextStore } from 'store';

import { LayoutMember, LayoutPublic } from 'layouts/BaseLayout';

const Home = () => {
  const [ state, dispatch ] = React.useContext(ContextStore);
  return (
    <LayoutMember>
      <div className="header">
        <OwlCarousel
          className="owl-carousel header-carousel owl-theme"
          margin={10}
          width={987}
          nav
          loop
          items={1}
        >
        
          <div className="item">
            <div className="header-desc">
              <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" /></div>
              <div className="title-desc">
                <div>PUBG Battle For Freedom</div>
              </div>
              <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
              <div className="short-desc">Dalam rangka menyemarakkan hari kemerdekaan mari kita meriahkan dengan turnament esport</div>
              <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
            </div>
            <img src="../../assets/img/carousel/cover2-01.jpg" className="cover-app" />
          </div>
          <div className="item">
            <div className="header-desc">
              <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" /></div>
              <div className="title-desc">
                <div>Mobile Legend Bang Bang Tournament</div>
              </div>
              <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
              <div className="short-desc">Playoff 8 Team, dimuali pada tanggal 3 Agustus 2019. Jangan lewatkan!</div>
              <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
            </div>
            <img src="../../assets/img/carousel/cover2-02.jpg" className="cover-app" />
          </div>
          <div className="item">
            <div className="header-desc">
              <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" /></div>
              <div className="title-desc">
                <div>Pes 2019 Tournament</div>
              </div>
              <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
              <div className="short-desc">Playoff offline 32 Team, daftarkan diri anda segera. Jangan lewatkan!</div>
              <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
            </div>
            <img src="../../assets/img/carousel/cover2-03.jpg" className="cover-app" />
          </div>

        </OwlCarousel>
      </div>

      <div className="content">
        <div className="live mt-5">
          <div className="container">
            <div className="streaming">
              <div className="d-flex v-center mb-2">
                <div className="font-20 font-bold font-sm-14 d-flex v-center"><span className="live-dot d-none d-md-inline-block"></span> Live Streaming</div>
                <div className="ml-auto">
                  <a href="stream.html" className="font-14 text-white d-flex v-center">
                    Watch More <i className="material-icons">chevron_right</i>
                  </a>
                </div>
              </div>
              <div className="row mobile first">
                <div className="col-md-6 col-12 px-0 pr-md-2 left-item">
                  <div className="item">
                    <a href="streamDetail.html">
                      <img src="https://img.youtube.com/vi/RDdBmrsrv68/sddefault.jpg" className="w-100" />
                      <div className="channel">Channel 1</div>
                      <div className="detail-wrapper">
                        <div className="detail">
                          <div className="detail-play">
                            <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" />
                          </div>
                          <div className="detail-title">MSI 2019 Play-In Draw Show</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-12 px-0 pl-md-2 right-item">
                  <div className="row m-0 mobile">
                    <div className="col-12 p-0 mb-0 mb-md-4">
                      <div className="item">
                        <a href="streamDetail.html">
                          <img src="https://cdn2.tstatic.net/pontianak/foto/bank/images/live-streaming-grand-final-esport-piala-presiden-di-youtube-dan-gtv-mulai-jam-1000-wib.jpg" className="w-100" />
                          <div className="channel">Channel 2</div>
                          <div className="detail-wrapper">
                            <div className="detail">
                              <div className="detail-play">
                                <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" />
                              </div>
                              <div className="detail-title">MSI 2019 Play-In Draw Show</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 p-0 pr-md-2">
                      <div className="item">
                        <a href="streamDetail.html">
                          <img src="https://i.ytimg.com/vi/2eiMLvFOYFI/maxresdefault_live.jpg" className="w-100" />
                          <div className="channel">Channel 3</div>
                          <div className="detail-wrapper">
                            <div className="detail">
                              <div className="detail-play">
                                <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" />
                              </div>
                              <div className="detail-title">MSI 2019 Play-In Draw Show</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 p-0 pl-md-2">
                      <div className="item">
                        <a href="streamDetail.html">
                          <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/esl-indonesia-dota-2.jpg" className="w-100" />
                          <div className="channel">Channel 4</div>
                          <div className="detail-wrapper">
                            <div className="detail">
                              <div className="detail-play">
                                <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" />
                              </div>
                              <div className="detail-title">MSI 2019 Play-In Draw Show</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="streaming py-5">
              <div className="d-flex v-center">
                <div className="font-20 font-bold font-sm-14 mb-2">Favourite Tournament</div>
                <div className="ml-auto">
                  <a href="streamFavourite.html" className="font-14 text-white d-flex v-center">
                    Watch More <i className="material-icons">chevron_right</i>
                  </a>
                </div>
              </div>
              <div className="row mobile first">
                <div className="col-lg-3 col-md-6 col-6 mb-3 col-fovourite">
                  <div className="item-favourite">
                    <a href="streamDetail.html">
                      <img src="https://img.youtube.com/vi/RDdBmrsrv68/sddefault.jpg" className="w-100" />
                      <div className="channel">Channel 4</div>
                      <div className="detail">
                        MSI 2019 Play-In Draw Show
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 mb-3 col-fovourite">
                  <div className="item-favourite">
                    <a href="streamDetail.html">
                      <img src="https://cdn2.tstatic.net/pontianak/foto/bank/images/live-streaming-grand-final-esport-piala-presiden-di-youtube-dan-gtv-mulai-jam-1000-wib.jpg" className="w-100" />
                      <div className="channel">Channel 2</div>
                      <div className="detail">
                        MSI 2019 Play-In Draw Show
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 mb-3 col-fovourite">
                  <div className="item-favourite">
                    <a href="streamDetail.html">
                      <img src="https://i.ytimg.com/vi/2eiMLvFOYFI/maxresdefault_live.jpg" className="w-100" />
                      <div className="channel">Channel 3</div>
                      <div className="detail">
                        MSI 2019 Play-In Draw Show
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 mb-3 col-fovourite">
                  <div className="item-favourite">
                    <a href="streamDetail.html">
                      <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/esl-indonesia-dota-2.jpg" className="w-100" />
                      <div className="channel">Channel 1</div>
                      <div className="detail">
                        MSI 2019 Play-In Draw Show
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game py-5">
          <div className="container">
            <div className="row m-0">
              <div className="col-md-6 p-1">
                <div className="title-app mb-3">
                  <span>Pick Your Game Category</span>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <form>
                  <div className="row m-0">
                    <div className="col p-1">
                      <div className="form-group">
                        <select className="form-control form-app" id="exampleFormControlSelect1">
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
                    <div className="col p-1">
                      <div className="form-group">
                        <select className="form-control form-app" id="exampleFormControlSelect1">
                          <option>All Platforms</option>
                          <option>PC</option>
                          <option>PS4</option>
                          <option>XBOX</option>
                          <option>Mobile</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-4 p-1">
                      <input type="text" className="form-control form-app" placeholder="Search Tournament" />
                    </div>
                    <div className="col-2 p-1">
                      <button type="submit" className="btn btn-app w-100"><img src="../../assets/img/icon/icon-search.svg" className="icon-app icon-18" /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mobile first">
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-2.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-3.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-4.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-5.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-6.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0">
                <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
                  <img src="../../assets/img/cover/game-cover-7.jpg" className="game-cover-app" />
                </a>
              </div>
              <div className="game-list col-md-3 col-6 p-0 last">
                <a href="browseDetail.html">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="popular pt-3 pb-5">
          <div className="container">
            <div className="row m-0">
              <div className="col-8">
                <div className="font-20 font-bold font-sm-14 mb-3">
                  <span>Featured Tournament</span>
                </div>
              </div>
              <div className="ml-auto">
                <a href="moreOpenTournament.html" className="font-14 text-white d-flex v-center">
                  More <i className="material-icons">chevron_right</i>
                </a>
              </div>
            </div>
            <div className="row mobile first">
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="tournamentInformation.html">
                  <img src="../../assets/img/carousel/cover2-01.jpg" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>	
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PUBG Mobile Summer Open League</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <pan>Mobile</pan>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="#">
                  <img src="../../assets/img/cover/game-cover-9.png" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PES 2019 Tournament</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <pan>Mobile</pan>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="#">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PUBG Mobile Summer Open League</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <pan>Mobile</pan>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="#">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PUBG Mobile Summer Open League</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <span>Mobile</span>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="#">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PUBG Mobile Summer Open League</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <pan>Mobile</pan>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
                <a href="#">
                  <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
                  <div className="organizer">
                    <img src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                    <div>
                      <div>Tencent Cup</div>
                    </div>
                  </div>
                  <div className="dropdown share ml-2">
                    <a className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons-outlined">share</i>
                    </a>

                    <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></a>
                      <a className="dropdown-item d-flex v-center" href="#"><img src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></a>
                    </div>
                  </div>
                  <div className="popular-desc">
                    <div style={{color: '#909090', fontSize: '12px'}}>
                      31 Agustus 2019 at 15:00 WIB
                    </div>
                    <div className="popular-title">PUBG Mobile Summer Open League</div>
                    <div className="popular-console">
                      <div className="game-platforms">
                        <span>PC</span> 
                        <pan>Mobile</pan>
                      </div>
                    </div>
                    <div className="popular-participans" style={{color: '#909090'}}>
                      <span>10/8 Slots</span>
                      <span>Rp. 1.5M</span>
                      <span>Registration</span>
                    </div>
                  </div>
                </a>
              </div>
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
      </div>
    </LayoutMember>
  );
}

export default Home;