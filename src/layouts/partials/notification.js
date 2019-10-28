import React from 'react';

function Notification () {
  return (
    <div className="notifications-app d-md-none">
      <div className="header">
        <button className="btn btn-close"><i className="material-icons">close</i></button>
        <span>Pemberitahuan</span>
      </div>
      <div className="content">
        <div className="notifications-item">
          <div>Selamat email anda telah terverifikasi</div>
          <div><small>30 Agustus 2019</small></div>
        </div>
        <div className="notifications-item">
          <div>Pertandingan kamu selanjutnya melawan <b>Opponenet</b> pada tanggal 1 September 2019 13.00</div>
          <div><small>30 Agustus 2019</small></div>
        </div>
      </div>
    </div>
  );
}

export default Notification;