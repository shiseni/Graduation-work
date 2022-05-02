import React from "react";

const Contact = () => {
  return (
    <div>
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
          <span>8:30-17:22</span>
          <span>8:30-17:22</span>
          <span>8:30-17:22</span>
          <span>8:30-17:22</span>
          <span>8:30-16:22</span>
          <span>13:00-13:40</span>
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
          <span>Обед</span>
        </div>
        <div className="table-body">
          <span>-</span>
          <span>14:00-16:00</span>
          <span>-</span>
          <span>14:00-16:00</span>
          <span>-</span>
          <span>13:00-13:40</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
