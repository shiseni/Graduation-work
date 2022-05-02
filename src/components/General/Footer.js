import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <p>
          <a href="https://vk.com/kei_ulstu">
            <font>Vkontakte</font>
          </a>
        </p>
        <p>
          <a href="https://t.me/keiulgtu">
            <font>Telegram</font>
          </a>
        </p>
        <p>
          <font>E-mail: kei@ido.ulstu.ru</font>
        </p>
        <p>
          <font>Адрес: 32063, г. Ульяновск, ул.Энгельса, 3, (учебный корпус № 1), каб. 119</font>
        </p>
      </div>
      <div>
        <center>&copy; 2014&ndash;2022 &bull; Колледж экономики и информатики им. А.Н. Афанасьева &bull; Все права защищены </center>
      </div>
    </footer>
  );
};

export default Footer;
