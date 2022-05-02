import React, { useEffect } from "react";

const TitlePagesForFinalQualifyingWork = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>ТИТУЛЬНЫЕ ЛИСТЫ ДЛЯ ВКР</h2>
        <div>
          <p>Внимание! Для правильной распечатки - скачивайте документы себе на компьютер!</p>
          <p>
            <a href="https://disk.yandex.ru/i/F2oJxpAnwtDMbw">
              <span>Титульные листы для ВКР</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitlePagesForFinalQualifyingWork;
