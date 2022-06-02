import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Links, SectionNavButton } from "../constants";

const SectionNavigationBar = () => {
  const location = useLocation();
  const [hasSub, setHasSub] = useState(false);
  const [subLinks, setSubLinks] = useState(null);

  useEffect(() => {
    Links.forEach((element) => {
      if (element.key === location.pathname.split("/")[1]) {
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
  }, [subLinks, location.pathname]);

  if (hasSub)
    return (
      <div className="navigation-bar">
        {subLinks?.map((section) => {
          return (
            <SectionNavButton key={section.type} type={section.type === location.pathname.split("/")[2] ? "active_type" : null}>
              <Link to={section.link}>{section.name}</Link>
            </SectionNavButton>
          );
        })}
      </div>
    );
};

export default SectionNavigationBar;
