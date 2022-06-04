import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Links, MainNavButton } from "../constants";

const Sections = (props) => {
  const { currentKey } = props;
  return Links.map((section) => {
    return (
      <MainNavButton key={section.id} type={section.key === currentKey ? "active_section" : null}>
        <Link to={section.link} title={section.name}>
          {section.name}
        </Link>
      </MainNavButton>
    );
  });
};

const Header = () => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[1];
  const [smallHeader, setSmallHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuImage = `${showMenu ? "close" : "menu"}`;

  function showingMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScrollHeader = () => {
        let prevScroll = window.pageYOffset;
        let currentScroll;

        window.addEventListener("scroll", () => {
          currentScroll = window.pageYOffset;
          if (currentScroll < 50) {
            setSmallHeader(false);
          } else if (currentScroll > 50) {
            if (currentScroll > prevScroll) {
              setSmallHeader(true);
              setShowMenu(false);
            } else if (currentScroll < prevScroll) {
              setSmallHeader(false);
              setShowMenu(false);
            }
          }
          prevScroll = currentScroll;
        });
      };
      onScrollHeader();
    }
  }, []);

  return (
    <header className={`header${smallHeader ? " hide-header" : " show-header"}`}>
      <div className={`logo`}>
        <Link to="/">
          <img src="/logo.png" width="100" height="41" alt="Главная" />
        </Link>
      </div>
      <div className="block-menu" onClick={showingMenu}>
        <MediaQuery maxWidth={768}>
          <img src={`/${menuImage}.svg`} alt={`${menuImage}`} className="show-close-button" />
          {showMenu && (
            <>
              <div className="menu-background"></div>
              <ul className="navigation">
                <Sections currentKey={currentKey} />
              </ul>
            </>
          )}
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <ul className="navigation">
            <Sections currentKey={currentKey} />
          </ul>
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;
