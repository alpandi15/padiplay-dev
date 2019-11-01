import React from 'react';
import { Link } from 'react-router-dom'

import { LayoutMember } from 'layouts/BaseLayout';

const Blog = () => {
  return (
    <LayoutMember>
      <div className="content-header blog">
        <div className="container">
          <div className="row mobile first">
            <div className="col-md-6 col-12">
              <Link to="">
                <div className="featured-box">
                  <img alt="" src="https://www.padiplay.com/assets/blog/cover/cover1.png" className="featured-img" />
                  <div className="featured-detail">
                    <div className="featured-title">7 ALASAN MENGAPA MAIN GAME ITU BERMANFAAT.</div>
                    <div className="author">
                      <div>John Smith <span>Esport Infographic</span></div>
                    </div>
                    <div className="date mr-2"><i className="material-icons-outlined mr-2">event</i> September 12, 2019</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mobile">
                <div className="col-12 p-md-0">
                  <Link to="">
                    <div className="featured-box left-top">
                      <img alt="" src="https://www.padiplay.com/assets/blog/cover/cover2.png" className="featured-img" />
                      <div className="featured-detail">
                        <div className="featured-title">MENGAPA PERLU BERKOMPETISI SAAT NGE-GAME</div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                        </div>
                        <div className="date mr-2"><i className="material-icons-outlined mr-2">event</i> September 12, 2019</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-12">
                  <Link to="">
                    <div className="featured-box left-bottom">
                      <img alt="" src="https://www.padiplay.com/assets/blog/cover/cover3.png" className="featured-img" />
                      <div className="featured-detail">
                        <div className="featured-title">PERKEMBANGAN GAME YANG SEMAKIN HEBOH.</div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                        </div>
                        <div className="date mr-2"><i className="material-icons-outlined mr-2">event</i> September 12, 2019</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-12">
                  <Link to="">
                    <div className="featured-box left-bottom">
                      <img alt="" src="https://www.padiplay.com/assets/blog/cover/cover5.jpg" className="featured-img" />
                      <div className="featured-detail">
                        <div className="featured-title">WAJIB UPGRADE HP KENTANG! INI 5 GAME MOBILE YANG PALING DINANTIKAN PERILISANNYA</div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                        </div>
                        <div className="date mr-2"><i className="material-icons-outlined mr-2">event</i> September 12, 2019</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="blog py-md-5 pt-0 pb-5">
            <div className="row">
              <div className="col-12 col-md-8 order-2 order-md-1">
                <div className="title-app mb-2">Newest Blog</div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog-list mb-3">
                  <Link to="">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog-thumbnail">
                          <img alt="" src="https://blog.toornament.com/wp-content/uploads/2018/10/banner_open_tournament_v3.png" className="w-100" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-title">
                          Help shape the Toornament of tomorrow
                        </div>
                        <div className="blog-min-desc">											
                          Even though summer is closing in, with its never-ending sunny days, and beach/pool parties for the luckiest among us.
                        </div>
                        <div className="author">
                          <div>John Smith <span>Esport Infographic</span></div>
                          <div>May 24, 2019</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pagination pb-5">
                  <ul>
                    <li><Link to="" className="disbale">></Link></li>
                    <li><Link to="" className="active">1</Link></li>
                    <li><Link to="">2</Link></li>
                    <li><Link to="">3</Link></li>
                    <li>...</li>
                    <li><Link to="">198</Link></li>
                    <li><Link to="">199</Link></li>
                    <li><Link to="">></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4 order-1 order-md-2">
                <div className="sidebar">
                  <div className="search mb-5">
                    <div className="title-app mb-2">Search Blog</div>
                    <form>
                      <input className="form-control form-app" type="text" name="search" id="search" placeholder="Search Blog ..." />
                    </form>
                  </div>
                  <div className="categories mb-5 d-none d-md-block">
                    <div className="title-app mb-2">Categories</div>
                    <ul>
                      <li><Link to="">Business</Link></li>
                      <li><Link to="">Community Highlight</Link></li>
                      <li><Link to="">Esport Infographic</Link></li>
                      <li><Link to="">Featured Tournament</Link></li>
                      <li><Link to="">Opinion</Link></li>
                      <li><Link to="">Tournament Update</Link></li>
                      <li><Link to="">Tutorial</Link></li>
                      <li><Link to="">Uncategrized</Link></li>
                    </ul>
                  </div>
                  <div className="twitter d-none d-md-block">
                    <a className="twitter-timeline" data-height="500" data-dnt="true" data-theme="dark" data-link-color="#981CEB" href="https://twitter.com/Padiciti?ref_src=twsrc%5Etfw">Tweets by Twitter</a> 
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMember>
  );
}

export default Blog;