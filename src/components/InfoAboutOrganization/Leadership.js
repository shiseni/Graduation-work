import React from "react";
import { Leaderships } from "../constants";

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

const Leadership = () => {
  return (
    <div className="container">
      <div className="section-title">Административный состав факультета СПО</div>
      <div className="section-body">
        <div className="employees-box">
          {Leaderships.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
