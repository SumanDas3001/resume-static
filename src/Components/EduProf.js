import React from 'react';

export default function EduProf(){

  const card_bg = {
    backgroundColor: '#000000'
  }

  return(
    <div>
      <div className="mt-5">
        <h2 className="sansserif" style={{textAlign: 'center', color: 'black'}}>Profession</h2>
      </div>

      <div className="container">
        <div className="row mt-3 mb-5">
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white"><a href="http://yottolabs.com" className="custom-card text-white" target="_blank">Yotto Labs Pvt. Ltd.</a></h5>
                <p className="card-text text-white">Jun 2018 to Jun 2019</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white"><a href="https://arrivae.com" className="custom-card text-white" target="_blank">Singularity Furniture Pvt. Ltd.</a></h5>
                <p className="card-text text-white">Aug 2019 to Jan 2020</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white"><a href="https://www.spaceotechnologies.com" className="custom-card text-white" target="_blank">Space-O Technologies Pvt. Ltd.</a></h5>
                <p className="card-text text-white">Feb 2020 to Present..</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="sansserif" style={{textAlign: 'center', color: 'black'}}>Education</h2>
      </div>

      <div className="container">
        <div className="row mt-3 mb-5">
          <div className="col-sm-6 col-md-6">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white">Diploma in CST</h5>
                <p className="card-text text-white">Kalna Polytechnic -- Diploma (W.B.S.C.T.E) 2012-2015.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white">B.Tech in CSE</h5>
                <p className="card-text text-white">Brainware Group of Institutions -- B.Tech (W.B.U.T) 2015-2018.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
