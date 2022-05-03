import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Student = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default Student;
