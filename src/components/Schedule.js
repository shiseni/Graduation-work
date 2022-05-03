import React, { useEffect } from "react";

const Shedule = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <h2>Расписание</h2>
      <h3>
        <span>
          <a href="https://disk.yandex.ru/d/EA51eFMwESiFLQ">
            <span>Инструкция как пользоваться расписанием</span>
          </a>
        </span>
        <span>
          <a href="https://yadi.sk/d/flWvOqsC3Woqfe?w=1">Изменения на день</a>
        </span>
      </h3>
      <h3>
        Внимание!
        <p>
          С 23 февраля 2022 года с расписанием занятий студентов можно ознакомиться в личном кабинете. Вход по ссылке:{" "}
          <a href="https://lk.ulstu.ru/?q=auth/login&amp;r=q%3Dhome">https://lk.ulstu.ru/?q=auth/login&amp;r=q%3Dhome</a>
        </p>
      </h3>
      <h3>
        <a href="https://lk.ulstu.ru/?q=auth/login&amp;r=q%3Dhome">
          <span>Расписание занятий студентов</span>
        </a>
      </h3>
      <p>
        <a href="https://disk.yandex.ru/i/h5ypDcpjeKAXhQ">
          <span>Узнать, какая сейчас неделя</span>
          <span></span>
        </a>
        <span>ДОТ в расписании означает дистанционное занятие в Zoom</span>
        <span>Вниманию первокурсников!</span>
        <span>Расшифровка обозначений аудиторий, указанных в расписании:</span>
      </p>
      <span>1-131 - первый учебный корпус на ул.Энгельса, 3, аудитория 131.</span>
      <span>6-002 - шестой (главный) учебный корпус на ул.Северный Венец, 32, аудитория 002.</span>
      <span>3-218 - третий учебный корпусна ул.Северный Венец, 32, аудитория 218.</span>
      <span>
        2-304 - второй (ИЭФ) учебный корпусна ул.Северный Венец, 32, аудитория 304.
        <span>
          4-36 – четвертый учебный корпус (строительный факультет) аудитория 36<span>5-102 – пятый учебный корпус (бывшая военная кафедра) аудитория 102</span>
        </span>
      </span>
      <div>
        <span>Расписание звонков:</span>
      </div>
      <p>1 пара: 08:30 - 09:50</p>
      <p>2 пара: 10:00 - 11:20</p>
      <p>3 пара: 11:30 - 12:50</p>
      <p>4 пара: 13:30 - 14:50</p>
      <p>5 пара: 15:00 - 16:20</p>
      <p>6 пара: 16:30 - 17:50</p>
      <p>7 пара: 18:00 - 19:20</p>
      <p>8 пара: 19:30 - 20:50</p>
    </div>
  );
};

export default Shedule;
