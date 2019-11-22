import React from 'react'

import Layout from 'layouts'
import Sliders from 'views/Home/sliders'
import Games from 'views/Home/gameCategory'
import Tournaments from 'views/Home/tournaments'
import Footer from 'layouts/partials/footer'
import Streaming from 'views/Home/streaming'

const Home = () => {
  return (
    <Layout>
      <Sliders />
      <div className="content">
        <Streaming />
        <Games />
        <Tournaments />
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
