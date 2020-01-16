import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

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

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.latitude && this.state.longitude) {
      const { errorMessage, ...coordinates } = this.state;

      return <SeasonDisplay {...coordinates} />;
    }

    return <Loader text="Waiting for user action..." />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
