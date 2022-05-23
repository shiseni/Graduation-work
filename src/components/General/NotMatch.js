import React, { useEffect } from "react";

const NoMatch = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath(null);
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <div>
          <h1 align="center">Такой страницы не существует</h1>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
