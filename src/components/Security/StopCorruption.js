import React, { useEffect } from "react";

const StopCorruption = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">STOP Коррупция</div>
      <div className="section-body">
        <div align="center">
          <img src="/images/stop_corruption.jpg" alt="terrorist_threat" title="terrorist_threat" />
        </div>
      </div>
    </div>
  );
};

export default StopCorruption;
