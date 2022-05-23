import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Links, MainNavButton } from "../constants";

const Section = (props) => {
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
  const [currentKey, setCurrentKey] = useState(null);
  const [smallHeader, setSmallHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Links.forEach((element) => {
      if (element.link === location.pathname) setCurrentKey(element.key);
      if (element.sub !== undefined)
        element.sub.forEach((subElement) => {
          if (subElement.link === location.pathname) setCurrentKey(subElement.key);
        });
    });
    return () => {
      setCurrentKey(null);
    };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmallHeader(window.pageYOffset > 90));
    }
  }, []);

  return (
    <header className="header">
      <div className={`logo${smallHeader ? " hide-logo-header" : " show-logo-header"}`}>
        <Link to="/">
          <img src="/logo.png" width="100" height="41" alt="Главная" />
        </Link>
      </div>
      <div className="block-menu">
        <ul className="navigation">
          <Section currentKey={currentKey} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
