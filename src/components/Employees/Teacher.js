import React, { useEffect } from "react";

const Teacher = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Стоимость обучения</h2>
        <div>
          <p>
            <span>
              <a href="https://disk.yandex.ru/i/vFyg7MQ9DS83dA">О назначении председателей предметных (цикловых) комиссий (П(Ц)К) Колледжа экономики и информатики УлГТУ</a>
            </span>
            <span>
              <a href="https://disk.yandex.ru/i/jGi4UQQng2GcOA">О назначении заведующих учебными кабинетами, мастерскими, лабораториями Колледжа экономики и информатики УлГТУ</a>
            </span>
            <span>
              <a href="https://disk.yandex.ru/i/jIx7x3gtLlrupQ">План аттестации 2021-2022 уч.год</a>
            </span>
            <span>
              <a href="https://disk.yandex.ru/i/Uh7L_ChKLbpmgw">Порядок заведования учебным кабинетом</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
