import React from 'react'
import { connect } from 'react-redux';
import { profileStoreModel } from '../utils/models/profile.model';

const Skill: React.FC<{increment: Function, profileStore: profileStoreModel}> = (props) => {
  
  return (
    <div className="Skill">
      <section className="bg-blue-section-3 text-white mb-0" id="skill">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">Ability</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Skills</h4>
                <hr className="border-white" />
                <div className="row mb-4">
                  <div className="col-lg-12">
                  <ul className="list-unstyled">
                    {props.profileStore.skillResult.map((skill, key) => (
                      <li key={key} className="lead mb-2">
                        <strong>- {skill.title}</strong>{skill.details.length > 0 && ":"} <span>{skill.details.join(", ")}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12 col-md text-center">
                    <p className="font-italic">This is Profile on Linked.</p>
                    <a href="https://www.linkedin.com/in/kasansin-khamsat" rel="noopener noreferrer" className="btn btn-secondary" target="_blank">See more on Linked</a>
                  </div>
                  <div className="col-12 col-md text-center">
                    <p className="font-italic">This project is build on a custom.</p>
                    <a href="https://github.com/kasansinzen" rel="noopener noreferrer" className="btn btn-secondary" target="_blank">See project on Github</a>
                  </div>
                </div>
              </div>
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Tools</h4>
                <hr className="border-white" />
                <div className="row mb-4">
                  <div className="col-lg-12">
                    <ul className="list-unstyled">
                      {props.profileStore.toolResult.map((tool, key) => (
                        <li key={key} className="lead mb-2">
                          <strong>- {tool.title}</strong>{tool.details.length > 0 && ":"} <span>{tool.details.join(", ")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <h4 className="text-uppercase">Languages</h4>
                <hr className="border-white" />
                <div className="row mb-4">
                  <div className="col-lg-6 my-auto">
                    <ul className="list-unstyled">
                      {props.profileStore.languageResult.map((language, key) => (
                        <li key={key} className="lead mb-2">
                          <strong>- {language.title}</strong>: <span>{language.details.join(", ")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 my-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state: {profileStore: any}) => ({profileStore: state.profileStore});
const mapDispatchToProps = (dispatch: any, ownProps: unknown) => ({increment(data: any, typeRequests: string) {
  dispatch({type: typeRequests.toUpperCase(), value: data})
}})
export default connect(mapStateToProps, mapDispatchToProps)(Skill);