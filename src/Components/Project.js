import React from 'react';

export default function Project(){

  const card_style = {
    backgroundColor: '#000000'
  }

  const text_dec = {
    textDecoration: 'none'
  }
  return(
    <div>
      <div className="mt-5">
        <h2 className="sansserif" style={{textAlign: 'center', color: 'black'}}>Projects</h2>
      </div>

      <div className="container">
        <div className="row mt-2">
          <div className="col card-columns">
            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/react_clicker" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    Clicker App
                  </p>
                </div>
              </a>
            </div>

            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/image_finder" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    Image Finder
                  </p>
                </div>
              </a>
            </div>

            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/ReactTodoApp" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    Todo App
                  </p>
                </div>
              </a>
            </div>

            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/what_is_the_temp" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    What is the temp..
                  </p>
                </div>
              </a>
            </div>

            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/elastic_rails" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    Elastic Rails
                  </p>
                </div>
              </a>
            </div>

            <div className="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/Myportfolio" className="custom-card" target="_blank">
                <div className="card-body text-center">
                  <p
                    className="card-text text-white"
                    style={text_dec}
                  >
                    Portfolio
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
