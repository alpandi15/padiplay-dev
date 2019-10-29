import React from 'react';

const FavoriteTournement = () => {
  return (
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
              <img src="https://img.youtube.com/vi/RDdBmrsrv68/sddefault.jpg" className="w-100" alt=""/>
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
              <img src="https://cdn2.tstatic.net/pontianak/foto/bank/images/live-streaming-grand-final-esport-piala-presiden-di-youtube-dan-gtv-mulai-jam-1000-wib.jpg" className="w-100" alt=""/>
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
              <img src="https://i.ytimg.com/vi/2eiMLvFOYFI/maxresdefault_live.jpg" className="w-100" alt=""/>
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
              <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/esl-indonesia-dota-2.jpg" className="w-100" alt=""/>
              <div className="channel">Channel 1</div>
              <div className="detail">
                MSI 2019 Play-In Draw Show
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteTournement;