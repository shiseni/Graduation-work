import React, { useEffect } from "react";

const ReleaseInformation = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>ЗАКАЗ И ВЫДАЧА СПРАВОК</h2>
        <span>Обращаем Ваше внимание, что справки выдаются по графику!</span>
        <p>
          <span>
            Вторник и четверг: с 14:00 до 16:00 - прием заявок на оформление справок и выдача готовых справок (<span>обязательно </span>
          </span>
          <span>
            <span>уточните по телефону, готова ли справка!</span>)
          </span>
        </p>
        <h3>Заказать справки можно по телефону:&nbsp;(8422) 41-80-92;г. Ульяновск, ул. Энгельса, 3 (учебный корпус № 1), каб. 304</h3>
      </div>
    </div>
  );
};

export default ReleaseInformation;
