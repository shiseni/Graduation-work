import React, { useEffect } from "react";

const InformationAboutDiploma = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">ИНФОРМАЦИЯ О ВЫДАВАЕМОМ ДИПЛОМЕ</div>
      <div className="section-body">
        <div className="center-line">
          <p>Образец диплома о среднем профессиональном образовании</p>
        </div>
        <div align="center">
          <img src="/images/abiturientu/diploma.jpg" alt="diploma"></img>
        </div>
        <div>
          <h2>Приложения:</h2>
          <div className="files">
            <p>
              <a href="https://disk.yandex.ru/i/TUCIgFIc-v7iqg">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Вкладыши к диплому СПО</span>
              </a>
            </p>
            <p>
              <a href="https://disk.yandex.ru/i/7feoWH2gR5gVMA">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Свидетельство о профессии рабочего, должности служащего</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationAboutDiploma;
