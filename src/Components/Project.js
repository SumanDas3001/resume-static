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
      <div class="mt-5">
        <h2 class="sansserif" style={{textAlign: 'center', color: 'black'}}>Projects</h2>
      </div>

      <div class="container">
        <div class="row mt-2">
          <div class="col card-columns">
            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/react_clicker" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
                    style={text_dec}
                  >
                    Clicker App
                  </p>
                </div>
              </a>
            </div>

            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/image_finder" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
                    style={text_dec}
                  >
                    Image Finder
                  </p>
                </div>
              </a>
            </div>

            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/ReactTodoApp" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
                    style={text_dec}
                  >
                    Todo App
                  </p>
                </div>
              </a>
            </div>

            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
                    style={text_dec}
                  >
                    What is the temp..
                  </p>
                </div>
              </a>
            </div>

            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/elastic_rails" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
                    style={text_dec}
                  >
                    Elastic Rails
                  </p>
                </div>
              </a>
            </div>

            <div class="card" style={card_style}>
              <a href="https://github.com/SumanDas3001/Myportfolio" class="custom-card" target="_blank">
                <div class="card-body text-center">
                  <p
                    class="card-text text-white"
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
