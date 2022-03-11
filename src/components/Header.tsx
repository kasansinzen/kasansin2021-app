import React from 'react';

const Header: React.FC = () => {
  const title = "Kasansin Khamsat";

  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  return (
    <div className="Header">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger font-inherit" href="#page-top">{title}</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-dark-section-1 text-white rounded" type="button" onClick={() => setIsExpanded(!isExpanded)}>
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#skill">Ability</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#exprerience">Exprerience</a>
              </li>
              {/* <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;