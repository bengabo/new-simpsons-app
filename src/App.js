import React from "react";
import "./App.css";
import SimpCharacter from "./Components/SimpCharacter.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };
    this.newCharacter = this.newCharacter.bind(this);
  }

  componentDidMount() {
    this.newCharacter();
  }

  newCharacter() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          character: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.newCharacter}>new character</button>
        {this.state.character ? (
          <SimpCharacter character={this.state.character} />
        ) : (
          <p>Nothing to see</p>
        )}
      </div>
    );
  }
}

export default App;