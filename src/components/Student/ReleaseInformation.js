import React from "react";

const ReleaseInformation = () => {
  return (
    <div className="container">
      <div className="section-title">Заказ и выдача справок</div>
      <div className="section-body">
        <div className="center-line attention">Обращаем Ваше внимание, что справки выдаются по графику!</div>
        <p>
          Вторник и четверг: с 14:00 до 16:00 - прием заявок на оформление справок и выдача готовых справок (<span className="attention">обязательно </span>
          уточните по телефону, готова ли справка!)
        </p>
        <p>
          Заказать справки можно по телефону: <a href="tel:+7422418092">+7 (422) 41-80-92</a>;
        </p>
        <p>г. Ульяновск, ул. Энгельса, 3 (учебный корпус № 1), каб. 304</p>
      </div>
    </div>
  );
};

export default ReleaseInformation;
