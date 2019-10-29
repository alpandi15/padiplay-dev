import React from 'react';

import { Facebook } from 'react-content-loader'

import { ContextStore } from 'store';

import { LayoutMember, LayoutPublic } from 'layouts/BaseLayout';
import Sliders from 'views/Home/sliders';
import Games from 'views/Home/gameCategory';
import Tournaments from 'views/Home/tournaments';
import Footer from 'layouts/partials/footer';
import Streaming from 'views/Home/streaming';

const Home = () => {
  const [ state, dispatch ] = React.useContext(ContextStore);
  return (
    <LayoutMember>
      <Sliders />
      <div className="content">
        <Streaming />
        <Games />
        <Tournaments />
        <Footer />
      </div>
    </LayoutMember>
  );
}

export default Home;