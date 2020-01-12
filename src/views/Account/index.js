import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Layout from 'layouts'

import WallApp from 'assets/img/carousel/cover2-01.jpg'

const Account = (props) => {
  const {
    userData
  } = props

  return (
    <Layout>
      <div className="content-header detail">
        <img src={WallApp} className="browse-detail-cover" alt="" />
        <div className="container">
          <div className="d-flex v-center mobile">
            <div className="header-title">
              <div className="header-publisher font-12">
                <div>
                  <img src={userData && userData.image ? userData.image.raw : ''} className="organizer-avatar mr-2" alt="" />
                </div>
                <div>
                  Arcadia.Pro
                  {' '}
                  <span className="badge-app ml-2">Mobile</span>
                </div>
              </div>
              <a href="tournamentInformation.html" className="tournament-name">{`${userData.lastName} ${userData.firstName}`}</a>
              <div className="tournament-time font-12">
                {`Registered ${moment(userData.createdAt).format('DD-MM-YYYY')}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content information">
        <nav id="navbar" className="navbar second-navbar-app">
          <div className="container">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="tournamentInformation.html">Information</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="participants.html">Participants</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="matches.html">Matches</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="game-browse py-5">
          <div className="container">
            <div className="payment font-14 py-5">
              <div className="p-4">
                <div className="mb-3">
                  <div><small>Total Payment</small></div>
                  <div className="font-24 font-bold">Rp. 50.000</div>
                  <small>Note: Bayar sesuai dengan jumlah di atas</small>
                </div>
                <div className="mb-3">
                  Dicek dalam 24 jam setelah bukti transfer diupload. Diwajibkan untuk membayar sesuai total pembayaran sebelum batas waktu berakhir.
                </div>
                <div className="p-3 mb-3 payment-highlight">
                  Silahkan transfer ke rekening padiplay berikut:
                  <div className="mt-1 d-flex v-center">
                    <img src="../../assets/img/payment/bni.png" className="payment-image mr-3" alt="" />
                    Bank BNI
                  </div>
                  <div className="mr-2 l-h-2 pl-3 mt-2">
                    <p className="m-0">
                      No Rekening:
                      {' '}
                      <b>1230495868</b>
                    </p>
                    <p className="m-0">
                      Nama Rekening:
                      {' '}
                      <b>PT. Indocorpora Investama</b>
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Silahkan upload bukti transfer sebelum tanggal 23 Agustus 2019</li>
                    <li>Demi keamanan transaksi mohont untuk tidak membagikan bukti atau konfirmasi pembayaran pesanan kepada siapapun. selain mengunggahnya via aplikasi Padiplay</li>
                  </ul>
                </div>
                <button className="btn btn-app btn-upload mt-5">Upload Bukti Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userStore.userData,
  authorized: state.userStore.authorized
})

export default connect(mapStateToProps, null)(Account)
