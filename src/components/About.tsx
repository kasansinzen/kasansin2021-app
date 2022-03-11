import React from 'react'
import { connect } from 'react-redux'
import { profileStoreModel } from '../utils/models/profile.model';
import classnames from 'classnames';
import { FirebaseService } from '../utils/services/firebase.service';
import { IAboutResult } from '../utils/interfaces/master.interface';

interface IProps {}
const About: React.FC<IProps> = (props) => {

  const [resultAbout, setResultAbout] = React.useState<IAboutResult[]>([]);

  React.useEffect(() => {
    FirebaseService.getAbouts().then(result => setResultAbout(result));
  }, []);
  return (
    <div className="About">
      <section className="profile bg-dark-section-3" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">About</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            {resultAbout.map((about, key) => (
              <div key={key} className={classnames('col-lg-12')} >
                <p className="lead">{about.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;