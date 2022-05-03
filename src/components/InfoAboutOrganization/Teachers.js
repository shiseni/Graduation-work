import React, { useEffect } from "react";

const Teachers = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="main-container">
      <div className="container">
        <div id="content-photo">
          <h2>Руководство и педагогический состав КЭИ</h2>
          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Вершинина<p>Ирина</p>
                <p> Павловна</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Vershinina.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Зам. директора по УМР</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 300а</p>
              <p>тел. (8422) 77-88-59</p>
              <p>e-mail: vershininaip@ido.ulstu.ru</p>
            </div>

            <div id="fbox2">
              <h2>
                Рябоволова <p> Татьяна</p>
                <p> Анатольевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/ryabovolova_ta.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Ведущий специалист</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 300а</p>
              <p>тел. (8422) 77-88-59</p>
              <p>e-mail: ryabovolovata@ido.ulstu.ru</p>
            </div>

            <div id="fbox2">
              <h2>
                Блинкова <p> Лариса</p>
                <p> Борисовна</p>
              </h2>
              <p>
                <img src="assets/images/structure/blinkovalb.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Методист</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 300а</p>
              <p>тел. (8422) 77-88-59</p>
              <p>e-mail: blinkovalb@ido.ulstu.ru</p>
            </div>

            <div id="fbox2">
              <h2>
                Кудрявцева<p> Оксана</p>
                <p> Юрьевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/kudryavtsevaou.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Ведущий специалист</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 138а</p>
              <p>тел. (8422) 77-88-39</p>
              <p>e-mail: ms.ksenia1984@list.ru</p>
            </div>
          </div>

          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Николенко<p>Александр</p>
                <p> Сергеевич</p>
              </h2>
              <p>
                <img src="assets/images/structure/nikolenkoas.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Специалист</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 119</p>
              <p>тел. (8422) 77-88-14</p>
              <p>e-mail: nikolenkoas@ido.ulstu.ru</p>
            </div>

            <div id="fbox2">
              <h2>
                Зайцева<p> Любовь</p>
                <p> Ивановна</p>
              </h2>
              <p>
                <img src="assets/images/structure/zaizevali.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Архивариус</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 138б</p>
              <p>тел. (8422) 77-88-42</p>
              <p>e-mail: zaitsevali@ido.ulstu.ru</p>
            </div>

            <div id="fbox2">
              <h2>
                Прохорова<p> Валентина</p>
                <p> Сергеевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/prohorovavs.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Педагог-психолог</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 302</p>
              <p>тел. (8422) 77-88-28</p>
              <p>e-mail: prohorovavs@ido.ulstu.ru</p>
            </div>
          </div>

          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Аникин<p>Сергей</p>
                <p> Александрович</p>
              </h2>
              <p>
                <img src="assets/images/structure/Anikin.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <p>
                <span>
                  <font size="+1">К.Ист.Н.</font>
                </span>
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>

              <p>Права и Обществознания</p>
            </div>

            <div id="fbox2">
              <h2>
                Аронова<p>Ирина </p>
                <p>Николаевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/aronova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Математических дисциплин</p>
            </div>

            <div id="fbox2">
              <h2>
                Баранов<p>Сергей</p>
                <p> Александрович</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Baranov.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин</p>
            </div>

            <div id="fbox2">
              <h2>
                Березовская<p>Ольга </p>
                <p>Владимировна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Berezovskaya.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Высшей математики</p>
            </div>
          </div>
          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Графова<p>Елена </p>
                <p>Васильевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/grafova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин</p>
            </div>

            <div id="fbox2">
              <h2>
                Егорова<p>Анастасия </p>
                <p>Владимировна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Egorova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Иностранного языка</p>
            </div>

            <div id="fbox2">
              <h2>
                Иванова<p>Татьяна</p>
                <p> Александровна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Ivanova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Экономики</p>
            </div>

            <div id="fbox2">
              <h2>
                Ибрагимов<p>Талгат </p>
                <p>Баисович</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Ibragimov.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Мастер пр. обучения</font>
              </span>
            </div>
          </div>

          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Измайлова<p> Ляйсян</p>
                <p> Вялиевна</p>
              </h2>
              <p>
                <img src="assets/images/structure/izmailovalv.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Русского языка и Литературы</p>
            </div>

            <div id="fbox2">
              <h2>
                Карпекин<p>Сергей </p>
                <p>Александрович</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Karpekin.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин</p>
              <p>к.т.н., доцент</p>
              <p>председатель ПЦК нефтегазового дела</p>
              <p>руководитель ООП</p>
            </div>
            <div id="fbox2">
              <h2>
                Котельникова<p>Людмила </p>
                <p>Владимировна</p>
              </h2>
              <p>
                <img src="assets/images/structure/kotelnikovalv.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин</p>
            </div>

            <div id="fbox2">
              <h2>
                Кузьмин<p> Максим </p>
                <p>Юрьевич</p>
              </h2>
              <p>
                <img src="assets/images/structure/kuzminmu.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Иностранного языка</p>
            </div>
          </div>

          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Кунчина<p> Валентина </p>
                <p>Эдуардовна</p>
              </h2>
              <p>
                <img src="assets/images/structure/kunchina.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Иностранного языка,</p>
              <p>председатель П(Ц)К</p>
              <p>Общественно социальных</p>
              <p>и гуманитарных дисциплин</p>
            </div>
            <div id="fbox2">
              <h2>
                Мартынов<p>Сергей</p>
                <p> Васильевич</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Martynov.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Истории</p>
            </div>

            <div id="fbox2">
              <h2>
                Майорова<p>Татьяна </p>
                <p>Викторовна</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Mayorova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Математики</p>
              <p>и информатики</p>
            </div>

            <div id="fbox2">
              <h2>
                Муравьёва<p>Зоя </p>
                <p>Алексеевна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Muraveva.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Математики,</p>
              <p>председатель П(Ц)К</p>
              <p>Естественно научных</p>
              <p>и математических дисциплин</p>
            </div>
          </div>
          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Образцова<p>Валентина </p>
                <p>Владимировна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Obrazcova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Русского языка и литературы</p>
            </div>

            <div id="fbox2">
              <h2>
                Свешникова<p>Екатерина </p>
                <p>Сергеевна</p>
              </h2>
              <p>
                <img src="assets/images/structure3/Sveshnikova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
            </div>

            <div id="fbox2">
              <h2>
                Сергеева<p>Элеонора </p>
                <p>Владимировна</p>
              </h2>
              <p>
                <img src="assets/images/structure/ev_sergeeva.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Русского языка и литературы</p>
            </div>

            <div id="fbox2">
              <h2>
                Филиппова<p>Татьяна </p>
                <p>Владисовна</p>
              </h2>
              <p>
                <img src="assets/images/structure2018/Filippova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин</p>
            </div>
          </div>

          <div id="footer-structure">
            <div id="fbox2">
              <h2>
                Сафонов<p> Александр</p>
                <p> Валериевич</p>
              </h2>
              <p>
                <img src="assets/images/structure/safonovav.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 119</p>
              <p>тел. (8422) 77-88-14</p>
              <p>e-mail: safonovav@ido.ulstu.ru</p>
            </div>
            <div id="fbox2">
              <h2>
                Хайбуллова<p> Нурия </p>
                <p>Абдуласматовна</p>
              </h2>
              <p>
                <img src="assets/images/structure/xaibullova.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>Специальных дисциплин,</p>
              <p>председатель П(Ц)К</p>
              <p>«Экономические и управленческие дисциплины»</p>
            </div>

            <div id="fbox2">
              <h2>
                Юркина<p>Татьяна</p>
                <p> Константиновна</p>
              </h2>
              <p>
                <img src="assets/images/structure/urkinatk.jpg" border="5" width="180" height="220" alt="" />
              </p>
              <span>
                <font size="+1">Преподаватель</font>
              </span>
              <p>учебный корпус № 1 УлГТУ</p>
              <p>ул. Энгельса, 3, каб. 119</p>
              <p>тел. (8422) 77-88-14</p>
              <p>e-mail: polikarpova.1994@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
