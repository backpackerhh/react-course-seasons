import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({ latitude, longitude });
      },
      error => console.warn(error)
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.latitude} - Longitude: {this.state.longitude}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
