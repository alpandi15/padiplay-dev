import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Sliders = (props) => {
  return (
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
            <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" alt=""/></div>
            <div className="title-desc">
              <div>PUBG Battle For Freedom</div>
            </div>
            <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
            <div className="short-desc">Dalam rangka menyemarakkan hari kemerdekaan mari kita meriahkan dengan turnament esport</div>
            <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
          </div>
          <img src="../../assets/img/carousel/cover2-01.jpg" className="cover-app" alt="" />
        </div>
        <div className="item">
          <div className="header-desc">
            <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" alt=""/></div>
            <div className="title-desc">
              <div>Mobile Legend Bang Bang Tournament</div>
            </div>
            <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
            <div className="short-desc">Playoff 8 Team, dimuali pada tanggal 3 Agustus 2019. Jangan lewatkan!</div>
            <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
          </div>
          <img src="../../assets/img/carousel/cover2-02.jpg" className="cover-app" alt=""/>
        </div>
        <div className="item">
          <div className="header-desc">
            <div className="logo-desc mr-2"><img src="../../assets/img/logo.png" alt=""/></div>
            <div className="title-desc">
              <div>Pes 2019 Tournament</div>
            </div>
            <div className="title-prize mb-2"><small>Prize Pool</small><br /> <b>Rp 1.500.000</b></div>
            <div className="short-desc">Playoff offline 32 Team, daftarkan diri anda segera. Jangan lewatkan!</div>
            <a href="#" className="btn btn-app btn-sm mt-3">Play Now</a>
          </div>
          <img src="../../assets/img/carousel/cover2-03.jpg" className="cover-app" alt=""/>
        </div>

      </OwlCarousel>
    </div>
  );
}

export default Sliders;