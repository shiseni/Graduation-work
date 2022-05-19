import React, { useEffect } from "react";

const employees = [
  {
    id: 1,
    name: "Прохорова Светлана Юрьевна",
    image: "prohorova2.jpg",
    job: "Декан факультета СПО",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 304",
    phone: "(8422) 41-80-92",
    email: "svetl26@mail.ru",
  },
  {
    id: 2,
    name: "Мартынова Антонина Алексеевна",
    image: "martynova.jpg",
    job: "Заместитель декана",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 138а",
    phone: "(8422) 77-88-39",
    email: "martynovaaa@ido.ulstu.ru",
  },
  {
    id: 3,
    name: "Борисова Оксана Витальевна",
    image: "borisovaov.jpg",
    job: "Заместитель декана по учебно-воспитательной работе",
    placeFirst: "учебный корпус № 1 УлГТУ",
    placeSecond: "ул. Энгельса, 3, каб. 300а",
    phone: "(8422) 77-88-59",
    email: "borisovaov@ido.ulstu.ru",
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

const Leadership = (props) => {
  const { setStylePath } = props;

  useEffect(() => {
    setStylePath(null);
  }, [setStylePath]);

  return (
    <div className="container">
      <div className="section-title">Административный состав факультета СПО</div>
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

export default Leadership;
