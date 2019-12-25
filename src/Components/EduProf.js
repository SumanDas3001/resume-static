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
          <div class="col-sm-6 col-md-4">
            <div class="card">
              <div class="card-body" style={card_bg}>
                <h5 class="card-title text-white">Btech in CSE</h5>
                <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card">
              <div class="card-body" style={card_bg}>
                <h5 class="card-title text-white">Arrivae Design Pvt.Ltd</h5>
                <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card">
              <div class="card-body" style={card_bg}>
                <h5 class="card-title text-white">Special title treatment</h5>
                <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}