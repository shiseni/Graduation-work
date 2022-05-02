import React, { useEffect } from "react";
import News from "./Home/News";
import Contact from "./Home/Contact";

const Home = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <div className="new-information">
          <div>
            <a href="index.php?id=787">
              <h2>Приёмная кампания 2022</h2>
            </a>
          </div>
          <div>
            <a href="index.php?id=894">
              <h2>Информация по оплате</h2>
            </a>
          </div>
          <div>
            <a href="index.php?id=1177">
              <h2>Демонстрационный экзамен</h2>
            </a>
          </div>
        </div>
      </div>
      <News />
      <div className="container">
        <div className="main-information">
          <div className="item">
            <a href="index.php?id=18">
              <span>Наши Специальности</span>
              <img src="/images/home/career.jpg" alt="" />
            </a>
          </div>
          <div className="item">
            <a href="http://kei.ulstu.ru/index.php?id=266">
              <span>Расписание занятий</span>
              <img src="/images/home/schedule.jpg" alt="" />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <span>Фотогалерея</span>
              <img src="/images/home/collage.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
