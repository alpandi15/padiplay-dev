import React from 'react';
import FavoriteTournament from 'views/Home/streaming/favoriteTournament';
import LiveStreaming from 'views/Home/streaming/liveStreaming';

const Streaming = () => {
  return (
    <div className="live mt-5">
      <div className="container">
        <LiveStreaming />
        <FavoriteTournament />
      </div>
    </div>
  );
}

export default Streaming;