import React from 'react'
import RatingStar from './RatingStar';


const Skill: React.FC<any> = props => {
  return (
    <div className="Skill">
      <section className="bg-blue-section-3 text-white mb-0" id="skill">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">Abilities</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Skills</h4>
                <hr className="border-white" />
                <div className="row mb-4">
                  <div className="col-lg-6">
                    <ul className="list-unstyled text--skill">
                      <li className="lead mb-2">
                        <strong className="w--60">Angular JS</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">React + Redux</strong>
                        <span className="w--40 float-right"><RatingStar score={4} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">NodeJS + Express</strong>
                        <span className="w--40 float-right"><RatingStar score={4} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Javascript ES 6</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Type Script</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Jquery</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled text--skill">
                      <li className="lead mb-2">
                        <strong className="w--60">MySQL</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Codeigniter + HMVC</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Laravel</strong>
                        <span className="w--40 float-right"><RatingStar score={3} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">Bootstrap 4</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                      <li className="lead mb-2">
                        <strong className="w--60">CSS & SASS</strong>
                        <span className="w--40 float-right"><RatingStar score={5} /></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12 text-center">
                    <p className="font-italic">This project is build on a custom.</p>
                    <a href="https://github.com/kasansinzen" rel="noopener noreferrer" className="btn btn-secondary" target="_blank">See project on Github</a>
                  </div>
                </div>
              </div>
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Tools</h4>
                <hr className="border-white" />
                <div className="row mb-4">
                  <div className="col-lg-4">
                    <ul className="list-unstyled">
                      <li className="lead mb-2">
                        <strong>- Visual Studio Code</strong>
                      </li>
                      <li className="lead mb-2">
                        <strong>- Navicat</strong>
                      </li>
                      <li className="lead mb-2">
                        <strong>- Postman</strong>
                      </li>
                      <li className="lead mb-2">
                        <strong>- Github Desktop</strong>
                      </li>
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
                      <li className="lead mb-2">
                        <strong className="w--60">English</strong>
                        <span className="w--40 float-right"><RatingStar score={3} /></span>
                      </li>
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

export default Skill;