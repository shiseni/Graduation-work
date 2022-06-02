import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdmissionCampaign2022 = () => {
  return (
    <div className="container">
      <div className="section-title">Приёмная кампания 2022</div>
      <div className="section-body">
        <div>
          <div className="center-line">
            <p>За время работы мы подготовили более 6000 специалистов. </p>
            <p>Станьте частью нашей большой семьи!</p>
            <p>
              Вопросы по приемной кампании можно задать телефону: <a href="tel:77-88-13">77-88-13</a> или в <a href="https://vk.com/topic-66721941_48637089">официальной группе DКонтакте</a>
            </p>
            <p>По субботам с 9.00 до 13.00 можно прийти на очную консультацию по адресу: ул. Энгельса, 3.</p>
            <p>
              <a href="https://disk.yandex.ru/i/amjbSubm4_Mo3g">Правила приема СПО 2022</a>
            </p>
            <p>
              <Link to={"/admission_campaign_2022/reception_informatioon"}>Информация о приёме</Link>
            </p>
            <p>
              <Link to={"/abiturientu/speciality"}>Наши специальности</Link>
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdmissionCampaign2022;
