import React, { useEffect } from "react";

const TitlePagesForFinalQualifyingWork = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath(null);
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Титульные листы для ВКР</div>
      <div className="section-body">
        <div className="center-line attention">Внимание! Для правильной распечатки - скачивайте документы себе на компьютер!</div>
        <div className="center-line">
          <a href="https://disk.yandex.ru/i/F2oJxpAnwtDMbw" className="target-link">
            <span>Титульные листы для ВКР</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitlePagesForFinalQualifyingWork;
