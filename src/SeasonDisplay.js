import React from "react";

export default class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.latitude = this.props.latitude;
    this.longitude = this.props.longitude;
    this.currentMonth = new Date().getMonth();
    this.seasonConfig = {
      summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
      },
      winter: {
        text: "Burr, it's chilly",
        iconName: "snowflake"
      }
    };
  }

  getSeason = () => {
    if (this.currentMonth < 2 || this.currentMonth > 9) {
      return this.latitude > 0 ? "winter" : "summer";
    } else {
      return this.latitude > 0 ? "summer" : "winter";
    }
  };

  render() {
    const season = this.getSeason();
    const { text, iconName } = this.seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}
