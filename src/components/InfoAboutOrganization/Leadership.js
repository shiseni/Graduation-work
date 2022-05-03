import React, { useEffect } from "react";

const Leadership = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Административный состав факультета СПО</h2>
        <div id="footer-structure">
          <div id="fbox2">
            <h2>Прохорова Светлана Юрьевна</h2>
            <p>
              <img src="assets/images/structure2018/prohorova2.jpg" border="5" width="180" height="220" alt="" />
            </p>
            <span>
              <font size="+1">Декан факультета СПО</font>
            </span>
            <p>
              <span>
                <font size="+1">К.П.Н., Доцент</font>
              </span>
            </p>
            <p>учебный корпус № 1 УлГТУ</p>
            <p>ул. Энгельса, 3, каб. 304</p>
            <p>тел. (8422) 41-80-92</p>
            <p>svetl26@mail.ru</p>
          </div>
          <div id="fbox2">
            <h2>Мартынова Антонина Алексеевна</h2>
            <p>
              <img src="assets/images/structure/martynova.jpg" border="5" width="180" height="220" alt="" />
            </p>
            <span>
              <font size="+1">Заместитель декана</font>
            </span>
            <p>учебный корпус № 1 УлГТУ</p>
            <p>ул. Энгельса, 3, каб. 138а</p>
            <p>тел. (8422) 77-88-39</p>
            <p>e-mail: martynovaaa@ido.ulstu.ru</p>
          </div>
          <div id="fbox2">
            <h2>Борисова Оксана Витальевна</h2>
            <p>
              <img src="assets/images/structure/borisovaov.jpg" border="5" width="180" height="220" alt="" />
            </p>
            <span>
              <font size="+1">Заместитель декана по учебно-воспитательной работе</font>
            </span>
            <p>учебный корпус № 1 УлГТУ</p>
            <p>ул. Энгельса, 3, каб. 300а</p>
            <p>тел. (8422) 77-88-59</p>
            <p>e-mail: borisovaov@ido.ulstu.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
