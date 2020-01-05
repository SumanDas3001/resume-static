import React from 'react';

const about = {
  height: '25px',
  margin: '2px',
  paddingRight: '13px'
}

function Header(){
  return(
    <div>
      <header id="showcase">
        <h1>Hey, I am Suman</h1>
        <p>I am a Ruby on Rails developer.Enjoy learning new things</p>
        <a href="#section-a" class="button" id="read-more">Read more</a>
      </header>
      <section id="section-a">
        <img style={{borderRadius: '50%'}} src="img/suman.jpg" alt="Suman Das" />
        <h2>About</h2>
        <a href="file/Resume.pdf" class="pdf_button" target="_blank" download><img src="img/download.svg" style={about} alt="" />Resume</a>
        <p class="mt-3" style={{textAlign: 'center'}}>I am a Ruby on Rails developer, I have near about one year of industrial experience on backend development. I am also interested in fullstack development using Rails and React.</p>
      </section>
    </div>
  );
}

export default Header;
