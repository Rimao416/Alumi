import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar({ inactive }) {
  const [activeLink, setActiveLink] = useState("");
  console.log(activeLink);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`sidebar  ${inactive ? "sidebar--inactive" : ""}`}>
      <div className="sidebar__wrapper">
        <img src="" className="sidebar__wrapper--top" alt="" />
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__navigation u-block u-margin-top-extra">
        <ul className="sidebar__menu">
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "Accueil" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Accueil")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "Profile" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Profile")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "Title" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Title")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "About" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("About")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "Con" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Con")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
          <Link
            exact
            to="/admin"
            className={`sidebar__menu--link ${
              activeLink === "Log" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Log")}
          >
            <li className="sidebar__menu--item">
              <svg
                className="sidebar__menu--icon"
                data-name="Livello 1"
                id="Livello_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z" />
              </svg>
              <span className="sidebar__menu--text">Tableau de bord</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  inactive: PropTypes.bool,
};

export default Sidebar;
