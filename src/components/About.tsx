import React from 'react'
import { connect } from 'react-redux'
import { profileStoreModel } from '../utils/models/profile.model';
import classnames from 'classnames';

const About: React.FC<{increment: Function, profileStore: profileStoreModel}> = (props) => {
  return (
    <div className="About">
      <section className="profile bg-dark-section-3" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">About</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            {props.profileStore.aboutResult.map((about, key) => (
              <div key={key} className={classnames('col-lg-4', {'ml-auto': key%2 == 0, 'mr-auto': key%2 != 0})} >
                <p className="lead">{about.description}</p>
              </div>
            ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(About);