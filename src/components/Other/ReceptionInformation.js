import React from "react";
import { Link } from "react-router-dom";

const ReceptionInformation = () => {
  return (
    <div className="container">
      <div className="section-title">Информация о приёме</div>
      <div className="section-body">
        <div>
          <div>
            <p>
              <a href="https://disk.yandex.ru/i/amjbSubm4_Mo3g">Правила приема СПО 2022.pdf</a>
            </p>
            <p>Документы, необходимые при поступлении:</p>
            <ul className="list-style-disc">
              <li>
                <p>Документ государственного образца об образовании</p>
              </li>
              <li>
                <p>4 фото 3x4</p>
              </li>
              <li>
                <p>Копия паспорта абитуриента</p>
              </li>
              <li>
                <p>Копия паспорта одного из родителей (законного представителя)</p>
              </li>
              <li>
                <p>Медицинская справка по форме №086/У</p>
              </li>
              <li>
                <p>Копия военного билета или приписного свидетельства для юношей (при наличии)</p>
              </li>
            </ul>
            <p>
              <a href="assets/priem/priem2020_2021/obshezitie.pdf">Информация о наличии общежития и количество мест в общежитиях, выделяемых для иногородних поступающих</a>
            </p>
            <p>
              <Link to={"/abiturientu/tuition_price"}>Стоимость обучения</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionInformation;
