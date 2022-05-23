import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SectionNavigationBar from "./General/SectionNavigationBar";

const Security = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <SectionNavigationBar />
      <Outlet />
    </div>
  );
};

export default Security;
