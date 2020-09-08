import React, { Component } from "react";
import "./styles.css";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 20 },
      { name: "Michael", age: 25 }
    ],
    otherState: "some other value",
    showPerson: false
  };

  toggleHandler = () => {
    const show = this.state.showPerson;
    this.setState({ showPerson: !show });
  };

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = this.state.persons.map((person) => {
        return <Person name={person.name} age={person.age} />;
      });
    } else {
      persons = null;
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button onClick={this.toggleHandler}>Click</button>
        {persons}
      </div>
    );
  }
}

export default App;
