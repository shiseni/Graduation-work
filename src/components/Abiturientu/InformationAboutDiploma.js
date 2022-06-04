import React from "react";

const InformationAboutDiploma = () => {
  return (
    <div className="container">
      <div className="section-body">
        <div className="center-line">
          <p>Образец диплома о среднем профессиональном образовании</p>
        </div>
        <div align="center">
          <img src="/images/abiturientu/diploma.jpg" alt="diploma" style={{ maxWidth: "430px", objectFit: "contain", width: "100%" }}></img>
        </div>
        <div>
          <h2>Приложения:</h2>
          <div className="files">
            <p>
              <a href="https://disk.yandex.ru/i/TUCIgFIc-v7iqg" target="_blank" rel="noreferrer">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Вкладыши к диплому СПО</span>
              </a>
            </p>
            <p>
              <a href="https://disk.yandex.ru/i/7feoWH2gR5gVMA" target="_blank" rel="noreferrer">
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
