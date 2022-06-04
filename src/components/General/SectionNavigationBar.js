import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Links, SectionNavButton } from "../constants";

const SectionNavigationBar = () => {
  const location = useLocation();
  const link = location.pathname.split("/");
  const [currentSection, setCurrentSection] = useState(null);
  const [hasSub, setHasSub] = useState(false);
  const [subLinks, setSubLinks] = useState([]);
  const [showMenu, setShowMenu] = useState(link[2] !== undefined ? false : true);

  function showingMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  useEffect(() => {
    Links.forEach((element) => {
      if (element.key === link[1]) {
        setCurrentSection(element.name);
        setSubLinks(element.sub);
        if (element.sub) {
          setHasSub(true);
        }
      }
    });
    return () => {
      setSubLinks(null);
      setHasSub(false);
    };
  }, [subLinks, link]);

  const CurrentSection = () => {
    return subLinks?.map((section) => {
      if (section.type !== link[2]) return "";
      return (
        <>
          <SectionNavButton key={section.type} type={section.type === link[2] ? "active_type" : null} onClick={showingMenu}>
            <span>{showMenu ? currentSection : section.name}</span>
            <img src={`/${showMenu ? "up" : "down"}-arrow.svg`} alt="menu-arrow" className="menu-arrow" />
          </SectionNavButton>
        </>
      );
    });
  };

  if (hasSub)
    return (
      <div className="navigation-bar">
        <MediaQuery maxWidth={768}>
          <CurrentSection />
          {showMenu &&
            subLinks?.map((section) => {
              if (section.type === link[2])
                return (
                  <SectionNavButton key={section.type} type={section.type === link[2] ? "active_type" : null}>
                    <span to={section.link}>{section.name}</span>
                  </SectionNavButton>
                );
              return (
                <SectionNavButton key={section.type} type={section.type === link[2] ? "active_type" : null}>
                  <Link to={section.link}>{section.name}</Link>
                </SectionNavButton>
              );
            })}
        </MediaQuery>
        <MediaQuery minWidth={769}>
          {subLinks?.map((section) => {
            return (
              <SectionNavButton key={section.type} type={section.type === link[2] ? "active_type" : null}>
                <Link to={section.link}>{section.name}</Link>
              </SectionNavButton>
            );
          })}
        </MediaQuery>
      </div>
    );
};

export default SectionNavigationBar;
