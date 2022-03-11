import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Exprerience from '../components/Exprerience';
import Skill from '../components/Skill';
import { profileStoreModel } from "../utils/models/profile.model";
import About from '../components/About';

const App: React.FC<any> = (props) => {


  // getAbouts() {
  //   ProfileDataService.getAbouts().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'ABOUT_RESULT');
  //   });
  // }
  // getSkills() {
  //   ProfileDataService.getSkills().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'SKILL_RESULT');
  //   });
  // }
  // getTools() {
  //   ProfileDataService.getTools().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'TOOL_RESULT');
  //   });
  // }
  // getLanguages() {
  //   ProfileDataService.getLanguages().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'LANGUAGE_RESULT');
  //   });
  // }
  // getEducations() {
  //   ProfileDataService.getEducations().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'EDUCATION_RESULT');
  //   });
  // }
  // getCareers() {
  //   ProfileDataService.getCareers().then(result => {
  //     this.props.increment(result.docs.map(data => data.data()), 'CAREER_RESULT');
  //   });
  // }

  React.useEffect(() => {
  }, []);
  return <div className="App">
    <section className="page-top bg-dark-section-1" id="page-top">
      <header className="masthead bg-dark-section-1 text-white text-center">
        <div className="container">
          <img className="img-fluid rounded-circle align-middle mb-5 d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/kasansin-3e31b.appspot.com/o/public%2Fprofile%2Fprofile-kasansin.jpg?alt=media&token=86584f6f-01eb-4cfb-b55e-89733c7c5203" alt="" />
          <h1 className="text-uppercase mb-0">I'm Kasansin Khamsat</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">Full Stack Developer</h2>
        </div>
      </header>
    </section>
    <About />
    <Skill />
    <Exprerience />
  </div>;
}

export default App;
