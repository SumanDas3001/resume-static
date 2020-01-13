import React from 'react';
import Radium from 'radium';

const eduProf = () => {

  const card_bg = {
    backgroundColor: '#000000'
  }

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return(
    <div style={style}>
      <div className="mt-5">
        <h2 className="sansserif" style={{textAlign: 'center', color: 'black'}}>Education & Profession</h2>
      </div>

      <div className="container">
        <div className="row mt-3 mb-5">
          <div className="col-sm-6 col-md-6">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white">B.Tech in CSE</h5>
                <p className="card-text text-white">Brainware Group of Institutions -- B.Tech (W.B.U.T) 2015-2018.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="card">
              <div className="card-body" style={card_bg}>
                <h5 className="card-title text-white"><a href="https://arrivae.com" className="custom-card text-white" target="_blank">Singularity Furniture Private Limited (Arrivae)</a></h5>
                <p className="card-text text-white">I am working here as s junior fullstack developer from Aug 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radium(eduProf);
