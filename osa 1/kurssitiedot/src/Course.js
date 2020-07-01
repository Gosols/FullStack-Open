import React from "react";

export default function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
//--------------------------
//ALIKOMPONENTIT ALHAALLA
//--------------------------

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const parts = props.parts;

  return (
    <>
      {parts.map((part) => {
        return (
          <div key={part.id}>
            <Part part={part.name} exercises={part.exercises} />
          </div>
        );
      })}
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  let total = parts.reduce((a, b) => {
    var varA = a;
    var varB = b;

    //if-lausekkeilla vältetään objektin sekä numeron yhteenlaskemista
    //jos on objekti, täytyy silloin tarkentaa objektin sisälle
    if (typeof varA === "object") {
      varA = a.exercises;
    }

    if (typeof varB === "object") {
      varB = b.exercises;
    }

    return varA + varB;
  });

  return (
    <b>
      <p>Total of exercises: {total}</p>
    </b>
  );
};
