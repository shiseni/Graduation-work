import React from "react";
import { Teachers } from "../constants";

const Person = (props) => {
  const { person } = props;
  return (
    <div className="employees-content">
      <h2>{person.name}</h2>
      <p>
        <img src={`/images/employees/${person.image}`} border="5" width="180" height="220" alt="" />
      </p>
      {person.job ? <h3>{person.job}</h3> : null}
      {person.placeFirst ? <p>{person.placeFirst}</p> : null}
      {person.placeSecond ? <p>{person.placeSecond}</p> : null}
      {person.phone ? (
        <p>
          <a href={`tel:${person.phone}`}>{person.phone}</a>
        </p>
      ) : null}
      {person.email ? (
        <p>
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </p>
      ) : null}
    </div>
  );
};

const Teacher = () => {
  return (
    <div className="container">
      <div className="section-title">Руководство и педагогический состав КЭИ</div>
      <div className="section-body">
        <div className="employees-box">
          {Teachers.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
