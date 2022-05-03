import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const LeadershipTeachers = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Руководство. Педагогический (научно-педагогический) состав</h2>
        <Link to="/info_about_organization/leadership_teachers/leadership" title="Руководство и педагогический состав КЭИ">
          Руководство и педагогический состав КЭИ
        </Link>
        <Link to="/info_about_organization/leadership_teachers/teachers" title="Руководство и педагогический состав КЭИ">
          Руководство и педагогический состав КЭИ
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default LeadershipTeachers;
