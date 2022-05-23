import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import News from "./Home/News";
import Contact from "./Home/Contact";

const Home = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="welcome-image">
        <img src="/images/welcome_image.jpg" alt="" width={"100%"} />
      </div>
      <div className="container">
        <div className="new-information">
          <a className="target-link" href="index.php?id=787">
            <span>Приёмная кампания 2022</span>
          </a>
          <a className="target-link" href="index.php?id=894">
            <span>Информация по оплате</span>
          </a>
          <Link to={"/student/demo_exam"} className="target-link">
            <span>Демонстрационный экзамен</span>
          </Link>
        </div>
      </div>
      {/*<News />*/}
      <div className="container">
        <div className="main-information">
          <div className="item">
            <Link to={"abiturientu/speciality"}>
              <span>Наши Специальности</span>
              <img src="/images/home/career.jpg" alt="" width={"100%"} />
            </Link>
          </div>
          <div className="item">
            <Link to={"shedule"}>
              <span>Расписание занятий</span>
              <img src="/images/home/schedule.jpg" alt="" width={"100%"} />
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
