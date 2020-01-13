import React from 'react';
import Header from './Components/Header';
import Tech from './Components/Tech';
import Project from './Components/Project';
import EduProf from './Components/EduProf';
import Footer from './Components/Footer';
import Radium, {StyleRoot} from 'radium';

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <Header />
        <Tech />
        <Project />
        <EduProf />
        <Footer />
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
