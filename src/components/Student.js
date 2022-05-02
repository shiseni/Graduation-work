import React, { useEffect } from "react";

const Student = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return <div className="main-container"></div>;
};

export default Student;
