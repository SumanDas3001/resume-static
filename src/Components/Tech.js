import React from 'react';
import Radium from 'radium';

const tech = () => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return(
    <div className="container-fluid bg-dark" id="section-b" style={style}>
      <div className="row">
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/html5_image.jpeg" className="lang_logo rounded-circle" alt="" />
        </div>
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/css.jpg" className="lang_logo rounded-circle" alt="" />
        </div>
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/react-logo.png" className="lang_logo rounded-circle" alt="" />
        </div>
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/ruby.png" className="lang_logo rounded-circle" alt="" />
        </div>
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/rails.png" className="lang_logo rounded-circle" alt="" />
        </div>
        <div className="col-4 col-md-2 col-sm-2 p-2">
          <img src="img/postgresql.png" className="lang_logo rounded-circle" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Radium(tech);
