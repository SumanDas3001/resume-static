import React from 'react';

export default function Footer(){
  return(
    <div>
      <div class="container-fluid" id="section-a">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <i class="fa fa-phone"><a href="tel:+1123-456-7890" class="text-white">123-456-7890</a></i>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <a href="mailto:someone@example.com?Subject=Hello%20again"><i class="fa fa-envelope-o text-white"> example@gmail.com</i></a>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <i class="fa fa-map-marker" aria-hidden="true"> Address: Hridaypur, Kora Babupara, Kolkata, India, Pincode: 700130</i>
          </div>
        </div>
      </div>

      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item ml-2"><a href="https://www.facebook.com/profile.php?id=100006119806373" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></li>
            <li class="list-inline-item ml-2"><a href="https://twitter.com/Suman07396436" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></li>
            <li class="list-inline-item ml-2"><a href="https://github.com/SumanDas3001" target="_blank"><i class="fa fa-github fa-2x"></i></a></li>
            <li class="list-inline-item ml-2"><a href="https://www.linkedin.com/in/suman-das-9068b5142/" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></li>
            <li class="list-inline-item ml-2"><a href="https://www.instagram.com/sumangraphy/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a></li>
          </ul>
          <small class="text-white">Copyright &copy; 2019 All Rights Reserved</small><br/>
          <small class="text-white">Made with <span style={{color: 'red'}}>♥</span> by Suman</small>
        </div>
      </footer>
      <a href="#" id="scroll" style={{display: 'none'}}><span></span></a>
    </div>
  );
}