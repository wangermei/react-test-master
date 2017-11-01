import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}
export default Form;

