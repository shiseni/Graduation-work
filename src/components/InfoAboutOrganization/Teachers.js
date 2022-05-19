import React, { useEffect } from "react";

const employees = [
  {
    id: 1,
    name: "Вершинина Ирина Павловна",
    image: "Vershinina.jpg",
    job: "Зам. директора по УМР",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "vershininaip@ido.ulstu.ru",
  },
  {
    id: 2,
    name: "Рябоволова Татьяна Анатольевна",
    image: "ryabovolova_ta.jpg",
    job: "Ведущий специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "ryabovolovata@ido.ulstu.ru",
  },
  {
    id: 3,
    name: "Блинкова Лариса Борисовна",
    image: "blinkovalb.jpg",
    job: "Методист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "blinkovalb@ido.ulstu.ru",
  },
  {
    id: 4,
    name: "Кудрявцева Оксана Юрьевна",
    image: "kudryavtsevaou.jpg",
    job: "Ведущий специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138а",
    phone: "(8422) 77-88-39",
    email: "ms.ksenia1984@list.ru",
  },
  {
    id: 5,
    name: "Николенко Александр Сергеевич",
    image: "nikolenkoas.jpg",
    job: "Специалист",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "(8422) 77-88-14",
    email: "nikolenkoas@ido.ulstu.ru",
  },
  {
    id: 6,
    name: "Зайцева Любовь Ивановна",
    image: "zaizevali.jpg",
    job: "Архивариус",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138б",
    phone: "(8422) 77-88-42",
    email: "zaitsevali@ido.ulstu.ru",
  },
  {
    id: 7,
    name: "Прохорова Валентина Сергеевна",
    image: "prohorovavs.jpg",
    job: "Педагог-психолог",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 302",
    phone: "(8422) 77-88-28",
    email: "prohorovavs@ido.ulstu.ru",
  },
  {
    id: 8,
    name: "Аникин Сергей Александрович",
    image: "Anikin.jpg",
    job: "Преподаватель Права и Обществознания",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 9,
    name: "Аронова Ирина Николаевна",
    image: "aronova.jpg",
    job: "Преподаватель Математических дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 10,
    name: "Баранов Сергей Александрович",
    image: "Baranov.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 11,
    name: "Березовская Ольга Владимировна",
    image: "Berezovskaya.jpg",
    job: "Преподаватель Высшей математики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 12,
    name: "Графова Елена Васильевна",
    image: "grafova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 13,
    name: "Егорова Анастасия Владимировна",
    image: "Egorova.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 14,
    name: "Иванова Татьяна Александровна",
    image: "Ivanova.jpg",
    job: "Преподаватель Экономики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 15,
    name: "Измайлова Ляйсян Вялиевна",
    image: "izmailovalv.jpg",
    job: "Преподаватель Русского языка и Литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 16,
    name: "Карпекин Сергей Александрович",
    image: "Karpekin.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 17,
    name: "Кузьмин Максим Юрьевич",
    image: "kuzminmu.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 18,
    name: "Кунчина Валентина Эдуардовна",
    image: "kunchina.jpg",
    job: "Преподаватель Иностранного языка",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 19,
    name: "Мартынов Сергей Васильевич",
    image: "Martynov.jpg",
    job: "Преподаватель Истории",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 20,
    name: "Майорова Татьяна Викторовна",
    image: "Mayorova.jpg",
    job: "Преподаватель Математики и информатики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 21,
    name: "Муравьёва Зоя Алексеевна",
    image: "Muraveva.jpg",
    job: "Преподаватель Математики",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 22,
    name: "Образцова Валентина Владимировна",
    image: "Obrazcova.jpg",
    job: "Преподаватель Русского языка и литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 23,
    name: "Свешникова Екатерина Сергеевна",
    image: "Sveshnikova.jpg",
    job: "Преподаватель",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 24,
    name: "Сергеева Элеонора Владимировна",
    image: "ev_sergeeva.jpg",
    job: "Преподаватель Русского языка и литературы",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 25,
    name: "Филиппова Татьяна Владисовна",
    image: "Filippova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 26,
    name: "Сафонов Александр Валериевич",
    image: "Filippova.jpg",
    job: "Преподаватель",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "(8422) 77-88-14",
    email: "safonovav@ido.ulstu.ru",
  },
  {
    id: 27,
    name: "Хайбуллова Нурия Абдуласматовна",
    image: "xaibullova.jpg",
    job: "Преподаватель Специальных дисциплин",
    placeFirst: "",
    placeSecond: "",
    phone: "",
    email: "",
  },
  {
    id: 28,
    name: "Юркина Татьяна Константиновна",
    image: "urkinatk.jpg",
    job: "Преподаватель",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 119",
    phone: "тел. (8422) 77-88-14",
    email: "polikarpova.1994@mail.ru",
  },
];

const Person = (props) => {
  const { person } = props;
  return (
    <div className="employees-content">
      <h2>{person.name}</h2>
      <p>
        <img src={`/images/employees/${person.image}`} border="5" width="180" height="220" alt="" />
      </p>
      <span>
        <font size="+1">{person.job}</font>
      </span>
      <p>{person.placeFirst}</p>
      <p>{person.placeSecond}</p>
      <p>{person.phone}</p>
      <p>{person.email}</p>
    </div>
  );
};

const Teachers = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath("/css/Home.css");
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Руководство и педагогический состав КЭИ</div>
      <div className="section-body">
        <div className="employees-box">
          {employees.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
