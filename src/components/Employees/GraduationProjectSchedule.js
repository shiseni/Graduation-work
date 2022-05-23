import React, { useEffect } from "react";

const GraduationProjectSchedule = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">График проведения защиты дипломных проектов</div>
      <div className="section-body">
        <div>
          <div className="files">
            <p>
              <a href="https://disk.yandex.ru/i/IVFBm84Gmk5bRg">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>График проведения защиты дипломных проектов (работ)</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationProjectSchedule;
