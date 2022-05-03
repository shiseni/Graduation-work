import React, { useEffect } from "react";

const BasicInfo = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <h2>Основные сведения</h2>
        <p>
          <img src="/images/college.jpg" alt="college" width="500" />
        </p>
        <h3>Юридический адрес:</h3>
        <p>432027, г. Ульяновск, ул. Северный Венец, 32</p>
        <h3>Учебные корпуса:</h3>
        <p>432063, г. Ульяновск, ул. Энгельса, 3 (учебный корпус № 1)</p>
        <p>432027, г. Ульяновск, ул. Северный Венец, 32 (учебный корпус № 6)</p>
        <p>432067, г. Ульяновск, б-р Фестивальный, 28 (учебный корпус № 9)</p>
        <table border="1" cellPadding="5">
          <tbody>
            <tr>
              <td rowSpan="2">Информация об учредителе (учредителях) образовательной организации:</td>
              <td>
                <div>
                  <p>1. Министерство науки и высшего образования Российской Федерации</p>
                </div>
                <div>
                  <p>Россия, 125009, г. Москва, ул. Тверская, д. 11</p>
                </div>
                <div>
                  <p>телефон: +7 (495) 539-55-19</p>
                </div>
                <div>
                  <p>
                    e-mail:&nbsp;<a href="mailto:info@minobrnauki.gov.ru">info@minobrnauki.gov.ru</a>
                  </p>
                </div>
                <div>
                  <p>
                    <span>
                      <span>
                        <a href="https://minobrnauki.gov.ru/">https://minobrnauki.gov.ru/</a>
                      </span>
                    </span>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <span color="#000000">
                    <span color="#000000"></span>
                  </span>
                  <p>2. Федеральное государственное бюджетное образовательное учреждение высшего образования «Ульяновский государственный технический университет»</p>
                  <span color="#000000">
                    <span color="#000000"></span>
                  </span>
                  <p>Россия, 432027, г. Ульяновск, ул. Северный Венец, д. 32</p>
                  <span color="#000000">
                    <span color="#000000"></span>
                  </span>
                  <p>телефон: 8 (8422) 43-02-37</p>
                  <span color="#000000">
                    <span color="#000000"></span>
                  </span>
                  <p>e-mail: rector@ulstu.ru</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="5">
          <tbody>
            <tr>
              <td>Информация о месте нахождения образовательной организации:</td>
              <td>Россия, 432017, г. Ульяновск, ул. Энгельса 3, д. 3</td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="5">
          <tbody>
            <tr>
              <td>Информация о режиме и графике работы образовательной организации:</td>
              <td>
                <p>Администрация:Понедельник – четверг с 8.30 до 17.22, пятница с 8.30 до 16.22,перерыв с 13.00 до 13.40;</p>
                <p>Учебные занятия:Понедельник – суббота с 8.00 до 21.20 по расписанию</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table border="1">
          <tbody>
            <tr>
              <td>Информация о контактных телефонах образовательной организации:</td>
              <td>+7 (8422) 77-88-14+7 (8422) 41-80-92</td>
            </tr>
          </tbody>
        </table>

        <table border="1" cellPadding="5">
          <tbody>
            <tr>
              <td>Информация об адресах электронной почты образовательной организации:</td>
              <td>
                <a href="mailto:kei@ido.ulstu.ru">
                  <span>kei@ido.ulstu.ru</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicInfo;
