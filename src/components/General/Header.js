import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Links, MainNavButton, SectionNavButton } from "../constants";

const SubSections = (props) => {
  const { subLinks } = props;
  const location = useLocation();

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
  //const [hasSub, setHasSub] = useState(false);
  //const [subLinks, setSubLinks] = useState(null);

  //useEffect(() => {
  //  Links.forEach((element) => {
  //    if (element.key === currentKey) {
  //      setSubLinks(element.sub);
  //      if (element.sub) {
  //        setHasSub(true);
  //      }
  //    }
  //  });
  //  return () => {
  //    setSubLinks(null);
  //    setHasSub(false);
  //  };
  //}, [subLinks, currentKey]);

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
          <Sections currentKey={currentKey} />
        </ul>
        {/*hasSub ? <SubSections subLinks={subLinks} /> : null*/}
      </div>
    </header>
  );
};

export default Header;
