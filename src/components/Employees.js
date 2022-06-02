import React from "react";
import { Outlet } from "react-router-dom";
import SectionNavigationBar from "./General/SectionNavigationBar";

const Employees = () => {
  return (
    <div className="container">
      <SectionNavigationBar />
      <Outlet />
    </div>
  );
};

export default Employees;
