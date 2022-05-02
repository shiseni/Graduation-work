import React, { useEffect } from "react";

const Portfolio = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>ПОРТФОЛИО</h2>
        <div>
          <p>Внимание! Для редактирования документа скачайте его себе на компьютер!</p>
          <p>
            <a href="https://yadi.sk/d/5UIN0HhODbE23w">
              <span>Загрузить портфолио обучающего КЭИ</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
