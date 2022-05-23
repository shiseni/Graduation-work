import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const LeadershipTeachers = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Руководство. Педагогический (научно-педагогический) состав</div>
      <div className="section-body">
        <div className="new-information">
          <Link to="/info_about_organization/leadership_teachers/leadership" title="Административный состав факультета СПО" className="target-link">
            <span>Административный состав</span>
          </Link>
          <Link to="/info_about_organization/leadership_teachers/teachers" title="Руководство и педагогический состав КЭИ" className="target-link">
            <span>Руководство и педагогический состав</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LeadershipTeachers;
