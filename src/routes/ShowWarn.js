import React from 'react';

class Warn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
    };
  }

  handleToggleClick = () => {
    this.setState(
      prevState => ({
        showWarning: !prevState.showWarning,
      }));
  }

  render() {
    return (
      <div>
        <WarningButton warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
function WarningButton(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div>
      warning
    </div>
  );
}

export default Warn;

