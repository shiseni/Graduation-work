import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Documents = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Документы</div>
      <div className="section-body">
        <ul className="list-style-disc">
          <li>
            <a href="assets/files/pdf/UstavU.pdf" id="file_1">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Устав университета</span>
            </a>
          </li>
          <li>
            <a href="assets/files/pdf/normativ/accred3113.pdf" id="file_2">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия свидетельства о государственной аккредитации (с приложениями)</span>
            </a>
          </li>
          <li>
            <a href="assets/files/pdf/normativ/licence.pdf" id="file_3">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия лицензии на осуществление образовательной деятельности (с приложениями)</span>
            </a>
          </li>
          <li>
            <a href="assets/files/pdf/sved/self_report.pdf" id="file_4">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Отчет о результатах самообследования</span>
            </a>
          </li>
          <li>
            <a href="https://yadi.sk/i/zyrxQMOzj9SHww" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение ГИА.pdf</span>
            </a>
          </li>
          <li>
            <a href="https://yadi.sk/i/8rAO0UqOfVMeeg" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение об индивидуальном плане.pdf</span>
            </a>
          </li>
          <li>
            <a href="https://yadi.sk/d/zB-E-BHVTEEE5Q" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение об ОПОП 2021.pdf</span>
            </a>
          </li>
          <li>
            <a href="https://yadi.sk/i/-5o-Sdz6CGjeyg" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Порядок зачета результатов освоения.pdf</span>
            </a>
          </li>
          <li>
            <a href="https://disk.yandex.ru/i/7nXZQr53NxpFiQ" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение о текущем контроле.pdf</span>
            </a>
          </li>
          <li>
            <Link to={"/abiturientu/tuition_price"}>
              <img src="/images/icon_generic.gif" alt="" />
              Документ о порядке оказания платных образовательных услуг, в том числе образец договора об оказании платных образовательных услуг, документ об утверждении стоимости обучения по каждой
              образовательной программе
            </Link>
          </li>
          <li>
            <a href="assets/files/pdf/sved/strateg2020_2023.pdf" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Программа стратегического развития</span>
            </a>
          </li>
          <li>
            <a href="https://www.ulstu.ru/main?cmd=file&amp;object=16965" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Положения по организации учебного процесса</span>
            </a>
          </li>
          <li>
            <a href="http://www.ulstu.ru/main/view/article/16159" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия правил внутреннего распорядка обучающихся</span>
            </a>
          </li>
          <li>
            <a href="http://www.ulstu.ru/main/view/article/16158" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия правил внутреннего трудового распорядка</span>
            </a>
          </li>
          <li>
            <a href="assets/files/pdf/abiturientam/prav_pr_2018_19.pdf" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия локального нормативного акта, регламентирующего правила приема обучающихся</span>
            </a>
          </li>
          <li>
            <a href="http://www.ulstu.ru/main/view/article/9228" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия локального нормативного акта, регламентирующего режим занятий обучающихся</span>
            </a>
          </li>
          <li>
            <a href="http://www.ulstu.ru/main?cmd=file&amp;object=15406" className="narod-attachment_mr_css_attr" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>
                Копия плана финансово-хозяйственной деятельности образовательной организации, утвержденного в установленном законодательством Российской Федерации порядке, или бюджетных смет
                образовательной организации
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Documents;
