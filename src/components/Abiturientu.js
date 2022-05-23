import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SectionNavigationBar from "./General/SectionNavigationBar";

const Abiturientu = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <SectionNavigationBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Abiturientu;
