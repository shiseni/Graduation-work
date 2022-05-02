import React, { useEffect } from "react";

const TuitionPrice = (props) => {
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
            <a href="https://disk.yandex.ru/i/0MjSVq4JkQyN1g">Образец договора об оказании платных образовательных услуг</a>
          </p>
          <p>
            <a href="https://disk.yandex.ru/i/f4VOLVQdZAPRpw">
              Стоимость платных образовательных услуг в 2021/2022 учебном году для лиц, поступивших в 2021 году и ранее и продолжающих обучение (в т.ч. восстановление и перевод из другого
              образовательного учреждения среднего профессионального образования)
            </a>
          </p>
          <p>
            <a href="assets/files/priem2020/order_foreign_2020_2021.pdf">О размерах оплаты обучения студента на договорной основе (для иностранных граждан)</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TuitionPrice;
