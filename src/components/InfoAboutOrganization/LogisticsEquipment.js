import React, { useEffect } from "react";

const LogisticsEquipment = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Материально-техническое обеспечение и оснащенность образовательного процесса</h2>
        <h1>Сайт лагает кошмарно</h1>
      </div>
    </div>
  );
};

export default LogisticsEquipment;
