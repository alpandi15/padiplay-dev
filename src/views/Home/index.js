import React from 'react';

import { ContextStore } from 'store';

const Home = () => {
  const { state } = React.useContext(ContextStore);
  console.log('Variable Global ',state)
  return (
    <div>
      Home Page
    </div>
  );
}

export default Home;