import React from 'react';

function Tech(){
  return(
    <div className="container-fluid bg-dark" id="section-b">
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

export default Tech;
