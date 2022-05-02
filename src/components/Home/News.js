import React from "react";

const News = () => {
  return (
    <div className="news">
      <div>
        <label className="news-date">02.04.2022</label>
        <div>
          <a href="index.php?id=1242" title="Приглашаем 9 апреля на День открытых дверей">
            Приглашаем 9 апреля на День открытых дверей
          </a>
        </div>
      </div>
      <div>
        <label className="news-date">28.03.2022</label>
        <div>
          <a href="index.php?id=1241" title="Студент КЭИ — призёр конкурса «Большие вызовы»">
            Студент КЭИ — призёр конкурса «Большие вызовы»
          </a>
        </div>
      </div>
      <div>
        <label className="news-date">12.03.2022</label>
        <div>
          <a href="index.php?id=1240" title=" Первые в региональной олимпиаде «Профистарт»">
            {" "}
            Первые в региональной олимпиаде «Профистарт»
          </a>
        </div>
      </div>
      <div>
        <label className="news-date">04.03.2022</label>
        <div>
          <a href="index.php?id=1239" title="Приглашаем на мини-футбол">
            Приглашаем на мини-футбол
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
