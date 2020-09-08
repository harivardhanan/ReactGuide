import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    console.log("[App js] constructor");
    super(props);
    this.state = {
      person: [
        { id: 1, name: "Max", age: 28 },
        { id: 2, name: "Manu", age: 30 }
      ],
      otherstate: "Somevalue",
      showValue: false,
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(state, props) {
    console.log("[App js]" + props);
    return state;
  }

  componentDidMount() {
    console.log("[App js] Component Mount Method");
  }

  switchHandler = (name) => {
    this.setState({
      person: [
        { name: name, age: 28 },
        { name: "Manu", age: 35 }
      ]
    });
  };

  toggleHandler = () => {
    const show = this.state.showValue;
    this.setState({ showValue: !show });
  };

  changeNameHandler = (event, index) => {
    console.log("test");
    const personIndex = this.state.person.findIndex(
      (person) => person.id === index
    );
    console.log(personIndex);

    const Person = { ...this.state.person[personIndex] };
    Person.name = event.target.value;

    const Persons = [...this.state.person];
    Persons[personIndex] = Person;

    this.setState({ person: Persons });
  };

  deleteHandler = (index) => {
    const persons = this.state.person;
    persons.splice(index, 1);
    this.setState({ person: persons });
  };

  render() {
    console.log("[App js] Render Method");
    let persons = null;
    if (this.state.showValue) {
      persons = (
        <Persons
          persons={this.state.person}
          clicked={this.deleteHandler}
          changed={this.changeNameHandler}
        />
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            showValue={this.state.showValue}
            personLength={this.state.person.length}
            clicked={this.toggleHandler}
            Title={this.props.appTitle}
          />
        ) : null}
        ;{persons}
      </div>
    );
  }
}

export default App;
