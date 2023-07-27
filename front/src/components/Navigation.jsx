import React, { useState,useRef,useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import {Link} from "react-router-dom"
function Navigation({ inactive }) {
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
    event.stopPropagation();
    setToggle((toggle) => !toggle); // Inverser la valeur de showMenu lorsqu'on clique sur l'élément <a>
  };
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`layout  ${inactive ? "layout--inactive" : ""}`}>
      <div className="layout__navigation">
        <span
          className="layout__navigation--left"
          onClick={() => setInactive(!inactive)}
        >
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
          {toggle && (
            <ul ref={menuRef} className="users__profile">
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
          )}
        </div>
      </div>
      <h1>Salut</h1>
    </div>
  );
}

export default Navigation;
