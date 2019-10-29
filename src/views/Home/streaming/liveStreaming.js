import React from 'react';

const LiveStreaming = () => {
  return (
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
                <img src="https://img.youtube.com/vi/RDdBmrsrv68/sddefault.jpg" className="w-100" alt=""/>
                <div className="channel">Channel 1</div>
                <div className="detail-wrapper">
                <div className="detail">
                    <div className="detail-play">
                    <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" alt=""/>
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
                    <img src="https://cdn2.tstatic.net/pontianak/foto/bank/images/live-streaming-grand-final-esport-piala-presiden-di-youtube-dan-gtv-mulai-jam-1000-wib.jpg" className="w-100" alt=""/>
                    <div className="channel">Channel 2</div>
                    <div className="detail-wrapper">
                    <div className="detail">
                        <div className="detail-play">
                        <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" alt=""/>
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
                    <img src="https://i.ytimg.com/vi/2eiMLvFOYFI/maxresdefault_live.jpg" className="w-100" alt=""/>
                    <div className="channel">Channel 3</div>
                    <div className="detail-wrapper">
                    <div className="detail">
                        <div className="detail-play">
                        <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" alt=""/>
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
                    <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/esl-indonesia-dota-2.jpg" className="w-100" alt=""/>
                    <div className="channel">Channel 4</div>
                    <div className="detail-wrapper">
                    <div className="detail">
                        <div className="detail-play">
                        <img src="../../assets/img/icon/icon-play-outline.svg" className="icon-invert icon-app" alt=""/>
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
  );
}

export default LiveStreaming;