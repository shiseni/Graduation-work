import React, { useEffect } from "react";

const Portfolio = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Портфолио</div>
      <div className="section-body">
        <div className="center-line attention">Внимание! Для редактирования документа скачайте его себе на компьютер!</div>
        <div className="center-line">
          <a href="https://yadi.sk/d/5UIN0HhODbE23w" className="target-link">
            <span>Загрузить портфолио обучающегося КЭИ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
