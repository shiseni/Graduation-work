import React, { useEffect } from "react";

const MethodicalMaterials = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Методические материалы</h2>
        <h1>ССЫЛКИ НА ФАЙЛЫ НЕ РАБОТАЮТ</h1>
        <div className="files">
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/forstudent/sbornik_rkpt_2018.pdf" id="file_1">
              ● Сборник материалов секции среднего профессионального образования 52 научно-технической конференции профессорско-преподавательского состава «Вузовская наука в современных условиях»
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/forstudent/mr_kp_mdk03.01_09.02.03.pdf" id="file_2">
              ● Методические рекомендации по выполнению КП по МДК.03.01 Технология разработки программного обеспечения специальность 09.02.03
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/forstudent/mu_kp_mdk03.02_09.02.03.pdf" id="file_3">
              ● Методические указания по выполнению КП по МДК.03.02 Инструментальные средства разработки программного обеспечения специальность 09.02.03
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_kr_38.02.04.pdf" id="file_4">
              ● Методические указания по курсовой работе Товароведение 38.02.04
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_kp_13_02_11_mdk_01_03.pdf" id="file_5">
              ● Методические рекомендации по выполнению КП МДК.01.03 Электрическое и электромеханическое оборудование по спец. 13.02.11
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_kp_13_02_11_mdk_01_05_2018.pdf" id="file_6">
              ● Методические рекомендации по выполнению КП МДК.01.05 Электроснабжение отрасли по спец. 13.02.11
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_kp_13_02_11_mdk_02_01.pdf" id="file_7">
              ● Методические рекомендации по выполнению КП МДК.02.01 Типовые технологические процессы обслуживания бытовых машин и приборов по спец. 13.02.11
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_kp_09_02_03_mdk_02_02_2018.pdf" id="file_8">
              ● Методические рекомендации по выполнению КП МДК.02.02 Технология разработки и защиты баз данных по специальности 09.02.03
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_rek_sam_rab_ud.pdf" id="file_9">
              ● Методические рекомендации по проведению самостоятельных работ учебной дисциплины
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_po_zip_01_curs.pdf" id="file_10">
              ● Методические рекомендации по выполнению и защите индивидуального проекта (для обучающихся 1 курса всех специальностей)
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_rek_po_plan.pdf" id="file_11">
              ● Методические рекомендации по планированию, организации и проведению практических занятий
            </a>
          </p>
          <p>
            <img src="/images/icon_pdf.gif" alt="Adobe PDF" title="Adobe PDF" />
            <a href="assets/files/pdf/studentam/met_normokontr_2016.pdf" id="file_12">
              ● Требования к качеству учебной документации. Нормоконтроль
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MethodicalMaterials;
