import React, { useEffect } from "react";

const TerroristThreat = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Порядок действия в случае возникновения террористической угрозы</div>
      <div className="section-body">
        <div align="center">
          <img src="/images/terrorist_threat.jpg" alt="terrorist_threat" title="terrorist_threat" />
        </div>
      </div>
    </div>
  );
};

export default TerroristThreat;
