import React from 'react';
import { Media } from 'reactstrap';

const Tournaments = () => {
  return (
    <div className="popular pt-3 pb-5">
      <div className="container">
        <div className="row m-0">
          <div className="col-8">
            <div className="font-20 font-bold font-sm-14 mb-3">
              <span>Featured Tournament</span>
            </div>
          </div>
          <div className="ml-auto">
            <Media left href="moreOpenTournament.html" className="font-14 text-white d-flex v-center">
              More <i className="material-icons">chevron_right</i>
            </Media>
          </div>
        </div>
        <div className="row mobile first">
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <Media left href="#" style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/carousel/cover2-01.jpg" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>	
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
            </Media>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <Media left href="#" style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/cover/game-cover-9.png" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
                    <span>Mobile</span>
                  </div>
                </div>
                <div className="popular-participans" style={{color: '#909090'}}>
                  <span>10/8 Slots</span>
                  <span>Rp. 1.5M</span>
                  <span>Registration</span>
                </div>
              </div>
            </Media>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <Media left href="#" style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
            </Media>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <Media left href="#" style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
            </Media>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <div onClick={() => alert('Test')} style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 popular-game">
            <div onClick={() => alert('Test')} style={{ cursor: 'pointer'}}>
              <Media object src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
              <div className="organizer">
                <Media object src="../../assets/img/organizer.png" className="organizer-avatar mr-2" />
                <div>
                  <div>Tencent Cup</div>
                </div>
              </div>
              <div className="dropdown share ml-2">
                <Media left className="dropdown-toggle btn-share" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons-outlined">share</i>
                </Media>

                <div className="dropdown-menu share" aria-labelledby="dropdownMenuLink">
                  <Media left className="dropdown-item d-flex v-center" href="#"><i className="material-icons">link</i></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-facebookv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-twitterv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-instagramv2.svg" className="icon-app icon-24" /></Media>
                  <Media left className="dropdown-item d-flex v-center" href="#"><Media object src="../../assets/img/icon/icon-whatsapp.svg" className="icon-app icon-24" /></Media>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;