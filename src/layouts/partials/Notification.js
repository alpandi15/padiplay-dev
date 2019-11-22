import React from 'react'

function Notification ({
  active,
  __handleShowNotif
}) {
  return (
    <div className={`notifications-app d-md-none ${active ? 'active' : ''}`}>
      <div className="header">
        <button className="btn btn-close" onClick={__handleShowNotif}><i className="material-icons">close</i></button>
        <span>Pemberitahuan</span>
      </div>
      <div className="content">
        <div className="notifications-item">
          <div>Selamat email anda telah terverifikasi</div>
          <div><small>30 Agustus 2019</small></div>
        </div>
        <div className="notifications-item">
          <div>
            Pertandingan kamu selanjutnya melawan
            {' '}
            <b>Opponenet</b>
            {' '}
            pada tanggal 1 September 2019 13.00
          </div>
          <div><small>30 Agustus 2019</small></div>
        </div>
      </div>
    </div>
  )
}

export default Notification
