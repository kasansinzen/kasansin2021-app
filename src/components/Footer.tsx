import React, { useState } from 'react'

const Footer: React.FC<any> = props => {
  return (
    <div className="Footer">
      {/* Footer */}
      <footer className="footer text-center bg-secondary">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div> */}
            <div className="col-md-4 offset-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/kasansin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-fw fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href={`mailto:kasansin.zen@gmail.com;`}>
                    <i className="fab fa-fw fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://line.me/ti/p/~xaozeed" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-social text-center rounded-circle">                    
                    <i className="fab fa-line"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by<a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed ">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;