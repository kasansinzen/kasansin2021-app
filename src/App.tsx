import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileDataService from "./services/profile.service";
import Exprerience from './components/Exprerience';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <section className="page-top" id="page-top">
          <header className="masthead bg-dark-section-1 text-white text-center">
            <div className="container">
              <img className="img-fluid rounded-circle align-middle mb-5 d-block mx-auto" src="/assets/img/profile-kasansin.jpg" alt="" />
              <h1 className="text-uppercase mb-0">I'm Kasansin Khamsat</h1>
              <hr className="star-light" />
              <h2 className="font-weight-light mb-0">Web Application Developer</h2>
            </div>
          </header>
        </section>
        <Exprerience />
        <Skill />
    </div>
  );
}

export default App;
