import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="welcome-image">
        <img src="/images/welcome_image.jpg" alt="" width={"100%"} />
      </div>
      <div className="container">
        <div className="new-information">
          <Link to={"/admission_campaign_2022"} className="target-link">
            <span>Приёмная кампания 2022</span>
          </Link>
          <Link to={"/abiturientu/tuition_price"} className="target-link">
            <span>Информация по оплате</span>
          </Link>
          <Link to={"/student/demo_exam"} className="target-link">
            <span>Демонстрационный экзамен</span>
          </Link>
        </div>
      </div>
      <div className="news">
        <div>
          <label className="news-date">02.04.2022</label>
          <div>
            <a href="index.php?id=1242" title="Приглашаем 9 апреля на День открытых дверей">
              Приглашаем 9 апреля на День открытых дверей
            </a>
          </div>
        </div>
        <div>
          <label className="news-date">28.03.2022</label>
          <div>
            <a href="index.php?id=1241" title="Студент КЭИ — призёр конкурса «Большие вызовы»">
              Студент КЭИ — призёр конкурса «Большие вызовы»
            </a>
          </div>
        </div>
        <div>
          <label className="news-date">12.03.2022</label>
          <div>
            <a href="index.php?id=1240" title=" Первые в региональной олимпиаде «Профистарт»">
              {" "}
              Первые в региональной олимпиаде «Профистарт»
            </a>
          </div>
        </div>
        <div>
          <label className="news-date">04.03.2022</label>
          <div>
            <a href="index.php?id=1239" title="Приглашаем на мини-футбол">
              Приглашаем на мини-футбол
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-information">
          <div className="item">
            <Link to={"abiturientu/speciality"}>
              <span>Наши Специальности</span>
              <img src="/images/home/career.jpg" alt="" width={"100%"} />
            </Link>
          </div>
          <div className="item">
            <Link to={"shedule"}>
              <span>Расписание занятий</span>
              <img src="/images/home/schedule.jpg" alt="" width={"100%"} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="table">
          <span className="table-title">Режим работы</span>
          <div className="table-body">
            <span>Понедельник</span>
            <span>Вторник</span>
            <span>Среда</span>
            <span>Четверг</span>
            <span>Пятница</span>
            <span>Обед</span>
          </div>
          <div className="table-body">
            <span>08:30 – 17:22</span>
            <span>08:30 – 17:22</span>
            <span>08:30 – 17:22</span>
            <span>08:30 – 17:22</span>
            <span>08:30 – 16:22</span>
            <span>13:00 - 13:40</span>
          </div>
        </div>
        <div className="table">
          <span className="table-title">Номера телефонов</span>
          <div className="table-body">
            <span>Приёмная</span>
            <span>Воспитательная работа</span>
            <span>Учебная работа</span>
            <span>Практики обучающихся</span>
            <span>Финансовые вопросы</span>
          </div>
          <div className="table-body">
            <span>
              <a href="tel: 41-80-92">41-80-92</a>
            </span>
            <span>
              <a href="tel: 77-88-13">77-88-13</a>
            </span>
            <span>
              <a href="tel: 77-88-59">77-88-59</a>
            </span>
            <span>
              <a href="tel: 77-88-39">77-88-39</a>
            </span>
            <span>
              <a href="tel: 77-88-21">77-88-21</a>
            </span>
          </div>
        </div>
        <div className="table">
          <span className="table-title">Заказ справок об обучении</span>
          <div className="table-body">
            <span>Понедельник</span>
            <span>Вторник</span>
            <span>Среда</span>
            <span>Четверг</span>
            <span>Пятница</span>
          </div>
          <div className="table-body">
            <span>-</span>
            <span>14:00-16:00</span>
            <span>-</span>
            <span>14:00-16:00</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
