import React from 'react'

import LayoutMember from 'layouts'
import Footer from 'layouts/partials/Footer'

const About = () => {
  return (
    <LayoutMember>
      <div className="header about d-flex v-center">
        <div className="container">
          <img alt="" src="../../assets/img/cover/about-cover.png" className="header-img" />
          <div className="header-desc">
            <h3>Apa itu Padiplay ?</h3>
            <span>Platform Esport Padiplay didedikasikan untuk kemajuan esport Indonesia. Esport Padiplay adalah platform turnamen esport untuk para pemain berkompetisi di berbagai turnamen baik tingkat daerah, regional dan nasional. Platform ini memberikan fasilitas bagi Esport Organizer untuk menyelenggarakan berbagai turnamem yang mengundang komunitas dan pemain yang diinginkan. Platform ini juga menghubungkan esport organizer dan para caster untuk menyiarkan Streaming tournamen yang dimainkan secara Live dan real-time.</span>
          </div>
          <a href="register.html" className="btn btn-app mt-5">Sign Up</a>
        </div>
      </div>
      <div className="content about">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 order-2 order-md-2 mb-3 text-right">
                <img alt="" src="../../assets/img/platform.png" className="about-img" />
              </div>
              <div className="col-md-6 col-12 order-1 order-md-1 mb-3 d-flex v-center">
                <div>
                  <h3>Platform yang tepat untuk esport</h3>
                  <span>Platform Padiplay kini semakin lengkap yang didedikasikan untuk esport dengan mengakomodasi para gamers untuk berkompetisi dalam turnamen baik tingkat regional/ domestik hingga tingkat internasional. Selain itu Padiplay akan memberikan solusi dan memberikan wadah dan fasilitas bagi Event Organizer atau penyelenggara sebuah turnamen agar lebih dikenal dan kompetitif sehingga akan menarik bagi para gamers untuk ikut bergabung.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 order-1 order-md-2 mb-3 d-flex v-center">
                <div>
                  <h3>Supporting Terbaik Padiplay</h3>
                  <span>Dengan struktur turnamen mutakhir, fungsi manajemen peserta, dan modul yang menunjang sebuah turnamen, Padiplay memberikan solusi terbaik dan profesional selama penyelenggara esport.</span>
                  <div className="text-center text-md-left">
                    <a href="register.html" className="btn btn-app mt-5">More Open Tournament</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 order-2 order-md-1 mb-3 text-left">
                <img alt="" src="../../assets/img/bracket.png" className="about-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 mb-3 order-2 order-md-2 text-right">
                <img alt="" src="../../assets/img/players.png" className="about-img" />
              </div>
              <div className="col-md-6 col-12 mb-3 order-1 order-md-1 d-flex v-center">
                <div>
                  <h3>Berbagai turnamen untuk dimainkan</h3>
                  <span>Dengan ratusan pertandingan, dan ribuan turnamen yang diadakan oleh penyelenggara terbaik, pemain selalu memiliki turnamen untuk memulai perjalanan esport mereka dan menikmati momen-momen permainan yang luar biasa.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 mb-3 order-1 order-md-2 d-flex v-center">
                <div>
                  <h3>Jaringan penyelenggara untuk diaktifkan</h3>
                  <span>Dengan jaringan penyelenggara global dan bereksperimen, kami membantu penerbit game dan merek mengoperasikan kampanye turnamen dalam pendekatan multi-lokal untuk komunitas mereka.</span>
                  <div className="text-center text-md-left">
                    <a href="register.html" className="btn btn-app mt-5">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 order-2 order-md-1 text-left">
                <img alt="" src="../../assets/img/toornament.png" className="about-img" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </LayoutMember>
  );
}

export default About;
