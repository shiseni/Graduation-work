import React, { useEffect } from "react";

const Employees = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return <div className="main-container"></div>;
};

export default Employees;
