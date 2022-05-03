import React, { useEffect } from "react";

const EducationalStandards = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Образовательные стандарты</h2>
        <div class="files">
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/08.02.01.pdf" id="file_1">
              ● 08.02.01 ● Строительство и эксплуатация зданий и сооружений
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/education/fgos_08.02.01_10.01.2018.pdf" id="file_2">
              ● 08.02.01 ● Строительство и эксплуатация зданий и сооружений (актуализированный ФГОС)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/09.02.03.pdf" id="file_3">
              ● 09.02.03 ● Программирование в компьютерных системах
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/education/fgos_09.02.07.pdf" id="file_4">
              ● 09.02.07 ● Информационные системы и программирование (актуализированный ФГОС)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/11.02.02.pdf" id="file_5">
              ● 11.02.02 ● Техническое обслуживание и ремонт радиоэлектронной техники (по отраслям)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/13.02.11.pdf" id="file_6">
              ● 13.02.11 ● Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/education/fgos_13.02.11_07.12.2017.pdf" id="file_7">
              ● 13.02.11 ● Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям) (актуализированный ФГОС)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/21.02.03.pdf" id="file_8">
              ● 21.02.03 ● Сооружение и эксплуатация газонефтепроводов и газонефтехранилищ
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/38.02.01.pdf" id="file_9">
              ● 38.02.01 ● Экономика и бухгалтерский учет (по отраслям)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/education/fgos_38.02.01_05.02.2018.pdf" id="file_10">
              ● 38.02.01 ● Экономика и бухгалтерский учет (по отраслям) (актуализированный ФГОС)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/38.02.04.pdf" id="file_11">
              ● 38.02.04 ● Коммерция (по отраслям)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/standart/38.02.07.pdf" id="file_12">
              ● 38.02.07 ● Банковское дело
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/education/fgos_38.02.07_05.02.2018.pdf" id="file_13">
              ● 38.02.07 ● Банковское дело (актуализированный ФГОС)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationalStandards;
