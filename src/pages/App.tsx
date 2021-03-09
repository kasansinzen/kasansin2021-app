import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ProfileDataService from "../utils/services/profile.service";
import Exprerience from '../components/Exprerience';
import Skill from '../components/Skill';
import { profileStoreModel } from "../utils/models/profile.model";
import About from '../components/About';

class App extends React.Component<{increment: Function, profileStore: profileStoreModel}> {

  constructor(props: any) {
    super(props);
    this.setState({
      skillResult: []
    });

    this.getSkills = this.getSkills.bind(this);
    this.getTools = this.getTools.bind(this);
    this.getLanguages = this.getLanguages.bind(this);
    this.getCareers = this.getCareers.bind(this);
    this.getEducations = this.getEducations.bind(this);
  }

  componentDidMount() {
    this.getAbouts();
    this.getSkills();
    this.getTools();
    this.getLanguages();
    this.getCareers();
    this.getEducations();
  }

  getAbouts() {
    ProfileDataService.getAbouts().then(result => {
      // result.docs.map(data => console.log("data.data()", data.data()))
      this.props.increment(result.docs.map(data => data.data()), 'ABOUT_RESULT');
    });
  }
  getSkills() {
    ProfileDataService.getSkills().then(result => {
      this.props.increment(result.docs.map(data => data.data()), 'SKILL_RESULT');
    });
  }
  getTools() {
    ProfileDataService.getTools().then(result => {
      this.props.increment(result.docs.map(data => data.data()), 'TOOL_RESULT');
    });
  }
  getLanguages() {
    ProfileDataService.getLanguages().then(result => {
      this.props.increment(result.docs.map(data => data.data()), 'LANGUAGE_RESULT');
    });
  }
  getEducations() {
    ProfileDataService.getEducations().then(result => {
      this.props.increment(result.docs.map(data => data.data()), 'EDUCATION_RESULT');
    });
  }
  getCareers() {
    ProfileDataService.getCareers().then(result => {
      this.props.increment(result.docs.map(data => data.data()), 'CAREER_RESULT');
    });
  }

  render() {
    return (
      <div className="App">
        <section className="page-top bg-dark-section-1" id="page-top">
          <header className="masthead bg-dark-section-1 text-white text-center">
            <div className="container">
              <img className="img-fluid rounded-circle align-middle mb-5 d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/kasansin-3e31b.appspot.com/o/public%2Fprofile%2Fprofile-kasansin.jpg?alt=media&token=86584f6f-01eb-4cfb-b55e-89733c7c5203" alt="" />
              <h1 className="text-uppercase mb-0">I'm Kasansin Khamsat</h1>
              <hr className="star-light" />
              <h2 className="font-weight-light mb-0">Web Application Developer</h2>
            </div>
          </header>
        </section>
        <About />
        <Skill />
        <Exprerience />
      </div>
    );
  }
}

const mapStateToProps = (state: {profileStore: any}) => ({profileStore: state.profileStore});
const mapDispatchToProps = (dispatch: any, ownProps: unknown) => ({increment(data: any, typeRequests: string) {
  dispatch({type: typeRequests.toUpperCase(), value: data})
}})
export default connect(mapStateToProps, mapDispatchToProps)(App);
