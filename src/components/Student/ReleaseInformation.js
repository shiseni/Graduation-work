import React from "react";

const ReleaseInformation = () => {
  return (
    <div className="container">
      <div className="section-title">Заказ и выдача справок</div>
      <div className="section-body">
        <div className="center-line attention">Обращаем Ваше внимание, что справки выдаются по графику!</div>
        <p>
          Вторник и четверг: с 14:00 до 16:00 - прием заявок на оформление справок и выдача готовых справок (<span className="attention">обязательно </span>
          <span>уточните по телефону, готова ли справка!</span>)
        </p>
        <h3>Заказать справки можно по телефону:&nbsp;(8422) 41-80-92;г. Ульяновск, ул. Энгельса, 3 (учебный корпус № 1), каб. 304</h3>
      </div>
    </div>
  );
};

export default ReleaseInformation;
