import React from 'react';

import { ContextStore } from 'store';

import { LayoutMember } from 'layouts/BaseLayout';

const Home = () => {
  const [ state ] = React.useContext(ContextStore);
  return (
    <LayoutMember>
    </LayoutMember>
  );
}

export default Home;