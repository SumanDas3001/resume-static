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
            <h5><a href="http://yottolabs.com" target="_blank" style={{color: 'black'}}>Yotto Labs Pvt. Ltd.</a></h5>
            <p>Jun 2018 to Jun 2019</p>
            <p>Yottolabs is a product based company. As a trainee ROR developer I hade learned some
              important things from Yottolabs that is how to work as a team member. I have learned basic
              syntaxes of ROR, database query, understanding the logic behind tasks. I have worked on their
              main project which was “insite” and that purpose I have learned the use of some tools like
              GitLab, Redmine and Paytm Payment Gateway integration
            </p>
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
            <h5><a href="https://arrivae.com" target="_blank" style={{color: 'black'}}>Singularity Furniture Pvt. Ltd. (Arrivae)</a></h5>
            <p>Aug 2019 to Jan 2020.</p>
            <p>Arrivae is a furniture company, they have some product to maintain their business. As a
              junior developer I have worked on their project mainly at the backend and sometimes also
              worked on frontend using React. They were used Bitbucket, Jira, Rails 5.2.1, etc
            </p>
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
            <h5><a href="https://www.spaceotechnologies.com" target="_blank" style={{color: 'black'}}>Space-O Technologies Pvt. Ltd.</a></h5>
            <p>Feb 2020 to Present...</p>
            <p>
              Space-O is a top mobile app development company in USA, Canada & India, offering iPhone
              (iOS) & Android app development services
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5">
          <h2 className="sansserif pb-3 pt-2 border-bottom mb-5" style={{textAlign: 'center', color: 'black'}}>Education</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="timeline-year">2012-2015</span>
                    <div class="timeline-icon">
                      <i class="fa fa-institution"></i>
                    </div>
                    <h3 class="title">Diploma in CST (W.B.S.C.T.E)</h3>
                    <p class="description">
                      Kalna Polytechnic - is a government polytechnic located in Kalna, Purba Bardhaman district, West Bengal. Affiliated to the West Bengal State Council of Technical Education.
                    </p>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="timeline-year">2015-2018</span>
                    <div class="timeline-icon">
                      <i class="fa fa-graduation-cap"></i>
                    </div>
                    <h3 class="title">B.Tech (W.B.U.T)</h3>
                    <p class="description">
                      Brainware Group of Institutions - Sabita Devi Education Trust, is an academic institution imparting quality education in Management and Engineering courses.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
