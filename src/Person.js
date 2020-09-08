import React from "react";

const Person = (props) => {
  return (
    <p>
      Hi I am {props.name} of Age {props.age}
    </p>
  );
};

export default Person;
