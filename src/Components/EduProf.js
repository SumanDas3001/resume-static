import React from 'react';

export default function EduProf(){

  const card_bg = {
    backgroundColor: '#000000'
  }

  return(
    <div>
      <div class="mt-5">
        <h2 class="sansserif" style={{textAlign: 'center', color: 'black'}}>Education & Profession</h2>
      </div>

      <div class="container">
        <div class="row mt-3 mb-5">
          <div class="col-sm-6 col-md-6">
            <div class="card">
              <div class="card-body" style={card_bg}>
                <h5 class="card-title text-white">B-tech in CSE</h5>
                <p class="card-text text-white">Brainware Group of Institutions -- B-Tech (W.B.U.T) 2015-2018.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="card">
              <div class="card-body" style={card_bg}>
                <h5 class="card-title text-white">Arrivae Design Pvt.Ltd</h5>
                <p class="card-text text-white">I am working here as s junior fullstack developer from Aug 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
