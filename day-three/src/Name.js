import { Component } from "react";

class Name extends Component {
  constructor() {
    super();

    this.state = {
      nameType: "",
      nameValue: "",
    };
  }
  handleName = (e) => {
    this.setState({
      nameType: e.target.value,
    });
  };

  handleSubmit = () => {
    this.props.onValueSubmitted(this.state.nameValue);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleName} type="text" />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Name;
