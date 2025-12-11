import React from "react";

class Empdata extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleInput = (event) => {
    const text = event.target.value;

    this.setState({ inputText: text });

    if (this.props.onInputChange) {
      this.props.onInputChange(text);
    }
  };

  render() {
    return (
      <>
        <h2>Enter Employee Name:</h2>
        <input 
          value={this.state.inputText} 
          onChange={this.handleInput} 
        />
      </>
    );
  }
}

export default Empdata;
