import React, { useEffect } from "react";

const TuitionPrice = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Стоимость обучения</div>
      <div className="section-body">
        <div className="files">
          <p>
            <a href="https://disk.yandex.ru/i/0MjSVq4JkQyN1g">
              <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
              Образец договора об оказании платных образовательных услуг
            </a>
          </p>
          <p>
            <a href="https://disk.yandex.ru/i/f4VOLVQdZAPRpw">
              <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
              <span>
                Стоимость платных образовательных услуг в 2021/2022 учебном году для лиц, поступивших в 2021 году и ранее и продолжающих обучение (в т.ч. восстановление и перевод из другого
                образовательного учреждения среднего профессионального образования)
              </span>
            </a>
          </p>
          <p>
            <a href="assets/files/priem2020/order_foreign_2020_2021.pdf">
              <img src="/images/icon_generic.gif" alt="Файл" title="Файл" />
              <span>О размерах оплаты обучения студента на договорной основе (для иностранных граждан)</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TuitionPrice;
