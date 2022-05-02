import React, { useEffect } from "react";

const InformationAboutDiploma = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2 align="center">ИНФОРМАЦИЯ О ВЫДАВАЕМОМ ДИПЛОМЕ</h2>
        <div>
          <h3>Образец диплома о среднем профессиональном образовании</h3>
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
    </div>
  );
};

export default InformationAboutDiploma;
