import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    /*const rand = Math.random();
	if(rand>0.5){
		throw new Error("Error Occured");
	}*/
    console.log("[Person js] Called");
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I am {this.props.name} of {this.props.age} yrs of age
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
