import React, { useEffect } from "react";

const Documents = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Документы</h2>
        <div className="files">
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/UstavU.pdf" id="file_1">
              ● Устав университета
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/normativ/accred3113.pdf" id="file_2">
              ● Копия свидетельства о государственной аккредитации (с приложениями)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/normativ/licence.pdf" id="file_3">
              ● Копия лицензии на осуществление образовательной деятельности (с приложениями)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/sved/self_report.pdf" id="file_4">
              ● Отчет о результатах самообследования
            </a>
          </p>
        </div>
        <a href="https://yadi.sk/i/zyrxQMOzj9SHww" className="narod-attachment_mr_css_attr" target="_blank" rel=" noopener noreferrer">
          Положение ГИА.pdf&nbsp;
        </a>
        <a href="https://yadi.sk/i/8rAO0UqOfVMeeg" className="narod-attachment_mr_css_attr" target="_blank" rel=" noopener noreferrer">
          Положение об индивидуальном плане.pdf
        </a>
        <a href="https://yadi.sk/d/zB-E-BHVTEEE5Q" className="narod-attachment_mr_css_attr" target="_blank" rel=" noopener noreferrer">
          Положение об ОПОП 2021.pdf
        </a>
        <a href="https://yadi.sk/i/-5o-Sdz6CGjeyg" className="narod-attachment_mr_css_attr" target="_blank" rel=" noopener noreferrer">
          Порядок зачета результатов освоения.pdf
        </a>
        <a href="https://disk.yandex.ru/i/7nXZQr53NxpFiQ">Положение о текущем контроле.pdf</a>- Документ о порядке оказания платных образовательных услуг, в том числе образец договора об оказании
        платных образовательных услуг, документ об утверждении стоимости обучения по каждой образовательной программе -
        <span>
          <a href="index.php?id=680">
            <span>ссылка</span>
          </a>
        </span>
        - Программа стратегического развития:
        <a href="assets/files/pdf/sved/strateg2020_2023.pdf">
          <span>ссылка</span>
        </a>
        - Положения по организации учебного процесса:
        <a href="https://www.ulstu.ru/main?cmd=file&amp;object=16965">
          <span>ссылка</span>
        </a>
        <span>
          - Копия правил внутреннего распорядка обучающихся:&nbsp;
          <span>
            <a href="http://www.ulstu.ru/main/view/article/16159">
              <span>ссылка</span>
            </a>
          </span>
        </span>
        <span>
          - Копия правил внутреннего трудового распорядка:
          <span>
            <a href="http://www.ulstu.ru/main/view/article/16158">
              <span>ссылка</span>
            </a>
          </span>
        </span>
        <span>
          - Копия локального нормативного акта, регламентирующего правила приема обучающихся:&nbsp;
          <span>
            <a href="assets/files/pdf/abiturientam/prav_pr_2018_19.pdf">
              <span>ссылка</span>
            </a>
          </span>
        </span>
        <span>
          - Копия локального нормативного акта, регламентирующего режим занятий обучающихся:
          <span>
            <a href="http://www.ulstu.ru/main/view/article/9228">
              <span>ссылка</span>
            </a>
          </span>
        </span>
        <span>- Копия плана финансово-хозяйственной деятельности образовательной организации, утвержденного в установленном </span>
        <span></span>
        <span>
          законодательством Российской Федерации порядке, или бюджетных смет образовательной организации:
          <span>
            <a href="http://www.ulstu.ru/main?cmd=file&amp;object=15406">
              <span>ссылка</span>
            </a>
          </span>
        </span>
        <p>
          <b>Предписания отсутствуют</b>
          <b>Отчеты об исполнении предписаний отсутствуют</b>
        </p>
      </div>
    </div>
  );
};

export default Documents;
