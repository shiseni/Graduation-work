import React, { useEffect } from "react";

const Shedule = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <div className="section-title">Расписание</div>
        <div className="section-body">
          <div className="files">
            <p>
              <a href="https://lk.ulstu.ru/?q=auth/login&amp;r=q%3Dhome">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Расписание занятий студентов</span>
              </a>
            </p>
            <p>
              <a href="https://yadi.sk/d/flWvOqsC3Woqfe?w=1">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Изменения на день</span>
              </a>
            </p>
            <p>
              <a href="https://disk.yandex.ru/i/h5ypDcpjeKAXhQ">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Узнать, какая сейчас неделя</span>
              </a>
            </p>
          </div>
          <div>
            <p className="center-line attention">Вниманию первокурсников!</p>
            <p>Расшифровка обозначений аудиторий, указанных в расписании:</p>
            <p>1-131 - первый учебный корпус на ул.Энгельса, 3, аудитория 131.</p>
            <p>6-002 - шестой (главный) учебный корпус на ул.Северный Венец, 32, аудитория 002.</p>
            <p>3-218 - третий учебный корпусна ул.Северный Венец, 32, аудитория 218.</p>
            <p>2-304 - второй (ИЭФ) учебный корпусна ул.Северный Венец, 32, аудитория 304.</p>
            <p>4-36 – четвертый учебный корпус (строительный факультет) аудитория 36</p>
            <p>5-102 – пятый учебный корпус (бывшая военная кафедра) аудитория 102</p>
            <p>ДОТ в расписании означает дистанционное занятие в Zoom</p>
            <p>
              <a href="https://disk.yandex.ru/d/EA51eFMwESiFLQ">
                <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
                <span>Инструкция как пользоваться расписанием</span>
              </a>
            </p>
          </div>
          <div className="table">
            <span className="table-title">Расписание звонков</span>
            <div className="table-body">
              <span>1 пара</span>
              <span>2 пара</span>
              <span>3 пара</span>
              <span>4 пара</span>
              <span>5 пара</span>
              <span>6 пара</span>
              <span>7 пара</span>
              <span>8 пара</span>
            </div>
            <div className="table-body">
              <span>08:30 - 09:50</span>
              <span>10:00 - 11:20</span>
              <span>11:30 - 12:50</span>
              <span>13:30 - 14:50</span>
              <span>15:00 - 16:20</span>
              <span>16:30 - 17:50</span>
              <span>18:00 - 19:20</span>
              <span>19:30 - 20:50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
