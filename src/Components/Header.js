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
        <p>I am a javascript developer.Enjoy learning new things and love to work/contribute on open source development.</p>
        <a href="#section-a" class="button" id="read-more">Read more</a>
      </header>
      <section id="section-a">
        <img src="http://res.cloudinary.com/wfdns6x2g6/image/upload/v1509007989/user_psolwi.png" alt="Suman Das" />
        <h2>About</h2>
        <a href="file/Resume.pdf" class="pdf_button" target="_blank" download><img src="img/download.svg" style={about} alt="" />Resume</a>
        <p class="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, officia. Libero, itaque repudiandae. Quidem, facilis officiis. Vitae, debitis magnam sed optio quidem numquam, aliquid rem, ullam animi perspiciatis quisquam ducimus voluptate. Ab iusto maxime ipsam, deleniti quam sint blanditiis quia dignissimos eum voluptatum? Cumque cupiditate fugit, maiores amet ipsum similique reiciendis soluta voluptatibus deleniti tempore officiis autem iste quisquam debitis officia itaque, dignissimos, a esse nobis fugiat commodi voluptatum fuga provident error. Doloribus vel quisquam iure minima reprehenderit. Quia repellat distinctio minus voluptatem, dolores ea necessitatibus aspernatur dolorem pariatur vitae repudiandae. Iure eveniet nostrum unde numquam architecto optio similique deserunt.</p>
      </section>
    </div>
  );
}

export default Header;