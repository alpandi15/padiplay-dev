import React from 'react';

const Game = (props) => {
  return (
    <div className="game py-5">
      <div className="container">
        <div className="row m-0">
          <div className="col-md-6 p-1">
            <div className="title-app mb-3">
              <span>Pick Your Game Category</span>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <form>
              <div className="row m-0">
                <div className="col p-1">
                  <div className="form-group">
                    <select className="form-control form-app" id="exampleFormControlSelect1">
                      <option>All Category</option>
                      <option>FPS</option>
                      <option>SPORT</option>
                      <option>MOBA</option>
                      <option>STRATEGY</option>
                      <option>FIGHTING</option>
                      <option>CARD</option>
                    </select>
                  </div>
                </div>
                <div className="col p-1">
                  <div className="form-group">
                    <select className="form-control form-app" id="exampleFormControlSelect1">
                      <option>All Platforms</option>
                      <option>PC</option>
                      <option>PS4</option>
                      <option>XBOX</option>
                      <option>Mobile</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 p-1">
                  <input type="text" className="form-control form-app" placeholder="Search Tournament" />
                </div>
                <div className="col-2 p-1">
                  <button type="submit" className="btn btn-app w-100"><img src="../../assets/img/icon/icon-search.svg" className="icon-app icon-18" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mobile first">
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-2.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-3.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-4.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-5.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-6.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0">
            <a href="browseDetail.html" title="Player Unknown's Battlegrounds">
              <img src="../../assets/img/cover/game-cover-7.jpg" className="game-cover-app" />
            </a>
          </div>
          <div className="game-list col-md-3 col-6 p-0 last">
            <a href="browseDetail.html">
              <img src="../../assets/img/cover/game-cover-1.jpg" className="game-cover-app" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;