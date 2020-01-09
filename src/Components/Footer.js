import React from 'react';

export default function Footer(){
  return(
    <div>
      <div className="container-fluid" id="section-a">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <i className="fa fa-phone"><a href="tel:9123364238" className="text-white"> 9123364238</a></i>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <a href="mailto:sumandas3001@gmail.com?Subject=Hello%20suman"><i className="fa fa-envelope-o text-white"> sumandas3001@gmail.com</i></a>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <i className="fa fa-map-marker" aria-hidden="true"> Address: J B Nagar, Andheri East, Mumbai, Maharashtra, India, Pincode: 400059</i>
          </div>
        </div>
      </div>

      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item ml-2"><a href="https://www.facebook.com/profile.php?id=100006119806373" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="list-inline-item ml-2"><a href="https://twitter.com/Suman07396436" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="list-inline-item ml-2"><a href="https://github.com/SumanDas3001" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
            <li className="list-inline-item ml-2"><a href="https://www.linkedin.com/in/suman-das-9068b5142/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
            <li className="list-inline-item ml-2"><a href="https://www.instagram.com/sumangraphy/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
          </ul>
          <small className="text-white">Copyright &copy; 2019 All Rights Reserved</small><br/>
          <small className="text-white">Made with <span style={{color: 'red'}}>♥</span> by Suman</small>
        </div>
      </footer>
      <a href="#" id="scroll" style={{display: 'none'}}><span></span></a>
    </div>
  );
}
