import React from "react";
import { Link } from "react-router-dom";

const Documents = () => {
  return (
    <div className="container">
      <div className="section-title">Документы</div>
      <div className="section-body">
        <div className="files">
          <p>
            <a href="/files/documents/UstavU.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Устав университета</span>
            </a>
          </p>
          <p>
            <a href="/files/documents/accred3113.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия свидетельства о государственной аккредитации (с приложениями)</span>
            </a>
          </p>
          <p>
            <a href="/files/documents/licence.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия лицензии на осуществление образовательной деятельности (с приложениями)</span>
            </a>
          </p>
          <p>
            <a href="/files/documents/self_report.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Отчет о результатах самообследования</span>
            </a>
          </p>
          <p>
            <a href="https://yadi.sk/i/zyrxQMOzj9SHww" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение ГИА.pdf</span>
            </a>
          </p>
          <p>
            <a href="https://yadi.sk/i/8rAO0UqOfVMeeg" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение об индивидуальном плане.pdf</span>
            </a>
          </p>
          <p>
            <a href="https://yadi.sk/d/zB-E-BHVTEEE5Q" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение об ОПОП 2021.pdf</span>
            </a>
          </p>
          <p>
            <a href="https://yadi.sk/i/-5o-Sdz6CGjeyg" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Порядок зачета результатов освоения.pdf</span>
            </a>
          </p>
          <p>
            <a href="https://disk.yandex.ru/i/7nXZQr53NxpFiQ" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Положение о текущем контроле.pdf</span>
            </a>
          </p>
          <p>
            <Link to={"/abiturientu/tuition_price"}>
              Документ о порядке оказания платных образовательных услуг, в том числе образец договора об оказании платных образовательных услуг, документ об утверждении стоимости обучения по каждой
              образовательной программе
            </Link>
          </p>
          <p>
            <a href="/files/documents/strateg2020_2023.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Программа стратегического развития</span>
            </a>
          </p>
          <p>
            <a href="https://www.ulstu.ru/main?cmd=file&amp;object=16965" target="_blank" rel="noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Положения по организации учебного процесса</span>
            </a>
          </p>
          <p>
            <a href="http://www.ulstu.ru/main/view/article/16159" target="_blank" rel="noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия правил внутреннего распорядка обучающихся</span>
            </a>
          </p>
          <p>
            <a href="http://www.ulstu.ru/main/view/article/16158" target="_blank" rel="noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия правил внутреннего трудового распорядка</span>
            </a>
          </p>
          <p>
            <a href="/files/documents/prav_pr_2018_19.pdf" target="_blank" rel="noreferrer">
              <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
              <span>Копия локального нормативного акта, регламентирующего правила приема обучающихся</span>
            </a>
          </p>
          <p>
            <a href="http://www.ulstu.ru/main/view/article/9228" target="_blank" rel="noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>Копия локального нормативного акта, регламентирующего режим занятий обучающихся</span>
            </a>
          </p>
          <p>
            <a href="http://www.ulstu.ru/main?cmd=file&amp;object=15406" target="_blank" rel="noreferrer">
              <img src="/images/icon_generic.gif" alt="" />
              <span>
                Копия плана финансово-хозяйственной деятельности образовательной организации, утвержденного в установленном законодательством Российской Федерации порядке, или бюджетных смет
                образовательной организации
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
