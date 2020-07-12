import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1> It's {this.state.date.toLocaleTimeString()} </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);
