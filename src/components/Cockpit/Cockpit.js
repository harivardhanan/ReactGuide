import React, { useEffect } from "react";
import "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("Cockpit useEffect");
    setTimeout(() => {
      alert("data Retrieved");
    }, 1000);
    return () => {
      console.log("Resources cleaned");
    };
  }, []);

  useEffect(() => {
    console.log("Cockpit useEffects 2");
  });

  const style = {
    width: "100px",
    backgroundColor: "green",
    padding: "10px",
    border: "1px solid blue",
    font: "inherit"
  };

  if (props.showValue) {
    style.backgroundColor = "red";
  }

  const classes = [];
  if (props.personLength <= 2) {
    classes.push("red");
  }

  if (props.personLength <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <p className={classes.join(" ")}>{props.Title}</p>
      <button style={style} onClick={props.clicked}>
        Click
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
