import React from "react";
import ReactDOM from "react-dom";
import Adder from "./Adder";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      init: 5,
      increment: 5
    };
  }

  onInitChange(e) {
    this.setState({ init: +e.target.value });
  }

  render() {
    return (
      <div className="App">
        <label>Base:</label>
        <input
          type="number"
          value={this.state.init}
          onChange={this.onInitChange.bind(this)}
        />
        <Adder {...this.state} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
