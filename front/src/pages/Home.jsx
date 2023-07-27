import React, { useState, useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import inbox from "../assets/icons/inbox.svg";
import profile from "../assets/icons/profile.svg";
import logout from "../assets/icons/logout.svg";
import settings from "../assets/icons/settings.svg";
import task from "../assets/icons/task.svg";
function Home() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    // Ajouter un écouteur d'événements au document pour détecter les clics
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false); // Fermer le menu si le clic est en dehors du menu
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      // Supprimer l'écouteur d'événements lorsque le composant est démonté
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);
  const handleMenuToggle = (event) => {
    event.stopPropagation()
    setToggle((toggle) => !toggle); // Inverser la valeur de showMenu lorsqu'on clique sur l'élément <a>
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <img src="" className="sidebar__wrapper--top" alt="" />
        </div>
        <div className="sidebar__divider"></div>
        <div className="sidebar__navigation u-block u-margin-top-extra">
          <ul className="sidebar__menu">
            <Link exact to="/a" className="sidebar__menu--link">
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
            <Link exact to="/a" className="sidebar__menu--link">
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
            <Link exact to="/a" className="sidebar__menu--link">
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
            <Link exact to="/a" className="sidebar__menu--link">
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
            <Link exact to="/a" className="sidebar__menu--link">
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
            <Link exact to="/a" className="sidebar__menu--link">
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
      <div className="layout">
        <div className="layout__navigation">
          <span className="layout__navigation--left">
            <CgMenuLeftAlt />
          </span>

          <div className="layout__navigation--right">
            <div
              className="layout__navigation__users"
              onClick={handleMenuToggle}
              ref={linkRef}
            >
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="layout__navigation__users--img"
              />
              <div className="layout__navigation__users--details">
                <p>John Doe</p>
                <p>Admin</p>
              </div>
            </div>
            {toggle &&
            
              <ul
                ref={menuRef}
                className="users__profile"
              >
                <Link to="/" className="users__profile--link">
                  <li className="users__profile--item">
                    <img src={profile} className="users__profile--img" alt="" />
                    Profile
                  </li>
                </Link>
                <Link to="/" className="users__profile--link">
                  <li className="users__profile--item">
                    <img src={inbox} className="users__profile--img" alt="" />
                    Messagerie
                  </li>
                </Link>
                <Link to="/" className="users__profile--link">
                  <li className="users__profile--item">
                    <img src={task} className="users__profile--img" alt="" />
                    Gestionnaire
                  </li>
                </Link>
                <Link to="/" className="users__profile--link">
                  <li className="users__profile--item">
                    <img src={settings} className="users__profile--img" alt="" />
                    Paramètres
                  </li>
                </Link>
                <Link to="/" className="users__profile--link">
                  <li className="users__profile--item">
                    <img src={logout} className="users__profile--img" alt="" />
                    Déconnexion
                  </li>
                </Link>
              </ul>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
