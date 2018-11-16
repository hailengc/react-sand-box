import React, { Component } from "react";

class Adder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.init
    };
  }

  onAdd() {
    this.setState((s, p) => {
      return { result: s.result + p.increment };
    });
  }

  onReset() {
    this.setState({
      result: this.props.init
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("... getDerivedStateFromProps ..");
    console.log(props, state);
  }

  componentWillReceiveProps(nextProps) {
    console.log("... will receive props called..");
    console.log(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(".... willUpdate called..");
    console.log(this.props, this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("....didupdate called");
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div style={{ border: "1px solid blue" }}>
        <div>{this.state.result}</div>
        <button onClick={this.onAdd.bind(this)}>Add</button>
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Adder;
