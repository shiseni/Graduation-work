import React from "react";
import { Link, Outlet } from "react-router-dom";

const LeadershipTeachers = () => {
  return (
    <div className="container">
      <div className="section-body">
        <div className="new-information">
          <Link to="/info_about_organization/leadership_teachers/leadership" title="Административный состав факультета СПО" className="target-link">
            <span>Административный состав</span>
          </Link>
          <Link to="/info_about_organization/leadership_teachers/teacher" title="Руководство и педагогический состав КЭИ" className="target-link">
            <span>Руководство и педагогический состав</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LeadershipTeachers;
