import React from 'react'

const Exprerience: React.FC<any> = props => {
  return(
    <div className="Experience">
      <section className="profile" id="profile">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Experience</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="form-group mb-5">
                <h4 className="text-uppercase">Education</h4>
                <hr />
                <div className="row mb-2">
                  <div className="col-lg-2 text-center">
                    <img src="/assets/img/msu.png" className="img-fluid h-100-px" alt="true" />
                  </div>
                  <div className="col-lg-10 my-auto">
                    <p className="lead mb-2">
                      <strong>BACHELOR: 2013 - 2017 MAHASARAKHAM UNIVERSITY</strong><br />
                      Bachelor of Science Degree, Major Information of Technology, Faculty of Informatics
                    </p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-lg-2 text-center">
                    <img src="/assets/img/mt.jpg" className="img-fluid h-100-px" alt="true" />
                  </div>
                  <div className="col-lg-10 my-auto">
                    <p className="lead mb-2">
                      <strong className="text-uppercase">Hight School: 2010 - 2013 Matthayom Dankhunthod School</strong><br />
                      Art-English
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exprerience;