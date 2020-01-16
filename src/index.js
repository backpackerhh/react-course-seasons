import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({ latitude, longitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (this.state.latitude && this.state.longitude) {
      return (
        <div>
          Latitude: {this.state.latitude} - Longitude: {this.state.longitude}
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
