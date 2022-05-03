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
      </div>
      <div>
        <h3>Приложения:</h3>
        <div class="files">
          <p>
            <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
            <a href="https://disk.yandex.ru/i/TUCIgFIc-v7iqg" id="file_1">
              ● Вкладыши к диплому СПО
            </a>
          </p>
          <p>
            <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
            <a href="https://disk.yandex.ru/i/7feoWH2gR5gVMA" id="file_2">
              ● Свидетельство о профессии рабочего, должности служащего
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationAboutDiploma;
