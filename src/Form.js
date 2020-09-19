import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  firstHandler = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  lastHandler = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  genderHandler = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${this.state.firstName} ${this.state.lastName} Registered Successfully!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      gender: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>First Name: </label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firstHandler}
            placeholder="First Name..."
          />
          <label>Last Name: </label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lastHandler}
            placeholder="Last Name..."
          />
          <label>Password: </label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordHandler}
            placeholder="Password..."
          />
          <label>Gender: </label>{" "}
          <select
            type="text"
            value={this.state.gender}
            onChange={this.genderHandler}
            defaultValue="Select Gender"
          >
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
