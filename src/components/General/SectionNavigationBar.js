import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Links, SectionNavButton } from "../constants";

const SectionNavigationBar = () => {
  const [currentKey, setCurrentKey] = useState(null);
  const [currentType, setCurrentType] = useState(null);
  const location = useLocation();

  useEffect(() => {
    Links.forEach((element) => {
      if (element.link === location.pathname) {
        setCurrentKey(element.key);
      }
      element.sub?.forEach((subElement) => {
        if (subElement.link === location.pathname) {
          setCurrentKey(subElement.key);
          setCurrentType(subElement.type);
        }
      });
    });
    return () => {
      setCurrentType(null);
      setCurrentKey(null);
    };
  });

  return (
    <div className="navigation-bar">
      {Links.map((section) => {
        if (section.key === currentKey) {
          return section.sub?.map((subSection) => {
            return (
              <SectionNavButton key={subSection.type} type={subSection.type === currentType ? "active_type" : null}>
                <Link to={subSection.link}>{subSection.name}</Link>
              </SectionNavButton>
            );
          });
        } else return null;
      })}
    </div>
  );
};

export default SectionNavigationBar;
