import React from 'react'
import { connect } from 'react-redux'
import { profileStoreModel } from '../utils/models/profile.model';
import ProfileDataService from "../utils/services/profile.service";

const Exprerience: React.FC<{increment: Function, profileStore: profileStoreModel}> = props => {
  return (
    <div className="Experience">
      <section className="profile bg-dark-section-3" id="exprerience">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Experience</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Education</h4>
                <hr />
                {props.profileStore.educationResult.map((education, key) => (
                  <div key={key} className="row mb-2">
                    <div className="col-lg-2 text-center">
                      {education.images.map((imgUrl, key) => {
                        ProfileDataService.getStorageRef(imgUrl).then(image => <img key={key} src={image} className="img-fluid h-100-px" />)
                      })}
                      {education.images.map((imgUrl, key) => <img key={key} src={imgUrl} className="img-fluid h-100-px" />)}
                    </div>
                    <div className="col-lg-10 my-auto">
                      <p className="lead mb-2"><strong>{education.durationTitle} {education.title}</strong><br />{education.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-group mb-5">
                <h4 className="text-uppercase">Career</h4>
                <hr />
                {props.profileStore.careerResult.map((career, key) => (
                  <div key={key} className="row mb-2">
                    <div className="col-lg-2 text-center">
                      {career.images.map((imageUrl, key) => <img key={key} src={imageUrl} className="img-fluid hm-100-px" />)}
                    </div>
                    <div className="col-lg-10 my-auto lead mb-2">
                      <strong className="text-uppercase">{career.title}</strong><br />
                      <strong className="text-uppercase">{career.durationTitle}</strong><br />
                      <p>{career.description}</p>
                      <ul>
                        {career.tasks.map((task, key) => <li key={key}> {task.taskTitle && (<strong>{task.taskTitle}: </strong>)}{task.taskDetails.join(", ")}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Exprerience);