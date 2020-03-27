import React from 'react';

export default function EduProf(){

  const card_bg = {
    backgroundColor: '#000000'
  }

  return(
    <div className="mt-5 mb-5"> 
      <div className="container">
        <h2 className="pb-3 pt-2 border-bottom mb-5" style={{textAlign: 'center', color: 'black'}}>Profession</h2>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">1</div>
          </div>
          <div className="col-6">
            <h5><a href="http://yottolabs.com" target="_blank">Yotto Labs Pvt. Ltd.</a></h5>
            <p>Jun 2018 to Jun 2019</p>
          </div>
        </div>
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5><a href="https://arrivae.com" target="_blank">Singularity Furniture Pvt. Ltd. (Arrivae)</a></h5>
            <p>Aug 2019 to Jan 2020.</p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">2</div>
          </div>
        </div>
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr/>
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">3</div>
          </div>
          <div className="col-6">
            <h5><a href="https://www.spaceotechnologies.com" target="_blank">Space-O Technologies Pvt. Ltd.</a></h5>
            <p>Feb 2020 to Present...</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5">
          <h2 className="sansserif pb-3 pt-2 border-bottom mb-5" style={{textAlign: 'center', color: 'black'}}>Education</h2>
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
    </div>
  );
}
