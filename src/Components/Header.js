import React from 'react';
import Radium from 'radium';

const about = {
  height: '25px',
  margin: '2px',
  paddingRight: '13px'
}

const header = () => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return(
    <div>
      <header id="showcase">
        <h1>Hey, I am Suman</h1>
        <p>I am a Ruby on Rails developer.Enjoy learning new things</p>
        <a href="#section-a" className="button" id="read-more">Read more</a>
      </header>
      <section id="section-a">
        <img style={{borderRadius: '50%'}} src="img/suman.jpg" alt="Suman Das" />
        <h2>About</h2>
        <a href="file/Resume.pdf" className="pdf_button" target="_blank" download><img src="img/download.svg" style={about} alt="" />Resume</a>
        <p className="mt-3" style={{textAlign: 'center'}}>I am a Ruby on Rails developer, I have near about one year of industrial experience on backend development. I am also interested in fullstack development using Rails and React.</p>
      </section>
    </div>
  );
}

export default Radium(header);
