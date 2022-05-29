import React from 'react'
import { connect } from 'react-redux'
import { ICareerResult, IEducationResult } from '../utils/interfaces/master.interface';
import { profileStoreModel } from '../utils/models/profile.model';
import { FirebaseService } from "../utils/services/firebase.service";

interface IProps {}
const Exprerience: React.FC<IProps> = props => {

  const [resultEducation, setResultEducation] = React.useState<IEducationResult[]>([]);
  const [resultCareer, setResultCareer] = React.useState<ICareerResult[]>([]);

  React.useEffect(() => {
    FirebaseService.getEducations().then(result => setResultEducation(result));
    FirebaseService.getCareers().then(result => setResultCareer(result));
  }, []);
  return (
    <div className="Experience">
      <section className="profile bg-dark-section-3" id="exprerience">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Experience</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Career</h4>
                <hr />
                {resultCareer.map((career, key) => (
                  <div key={key} className="row mb-2">
                    <div className="col-lg-3">
                      {/* {career.images.map((imageUrl, key) => <img key={key} src={imageUrl} className="img-fluid hm-100-px" />)} */}
                      <strong className="text-uppercase">{career.durationTitle}</strong><br />
                    </div>
                    <div className="col-lg-9 my-auto lead mb-2">
                      <strong className="text-uppercase">{career.title}</strong><br />
                      <p>{career.description}</p>
                      <ul>
                        {career.tasks.map((task, key) => <li key={key}> {task.taskTitle && (<strong>{task.taskTitle}: </strong>)}{task.taskDetails.join(", ")}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Education</h4>
                <hr />
                {resultEducation.map((education, key) => (
                  <div key={key} className="row mb-2">
                    
                    <div className="col-lg-12 my-auto">
                      <p className="lead mb-2"><strong>{education.durationTitle} | {education.title}</strong><br />{education.description}</p>
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

export default Exprerience;