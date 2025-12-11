import React from "react";
import Empdata from "./Empdata";

class Emprops extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeName: ""
    };
  }

  updateName = (value) => {
    this.setState({ employeeName: value });
  };

  render() {
    return (
      <>
        <Empdata onInputChange={this.updateName} />
        <h1>Employee Name: {this.state.employeeName}</h1>
      </>
    );
  }
}

export default Emprops;
