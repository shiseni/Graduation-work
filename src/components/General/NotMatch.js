import React, { useEffect } from "react";

const NoMatch = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath(null);
  }, []);

  return <h1>Page not match, Sowwy *~*</h1>;
};

export default NoMatch;
