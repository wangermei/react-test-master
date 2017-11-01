import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      // value: 'coconut',
      isGoing: true,
      numberOfGuest: 2,
    };
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleOnSubmit = (event) => {
  //   // alert('A name was submitted:' + this.state.value);
  //   alert('Your favorite flavor is:' + this.state.value);
  //   event.preventDefault();
  // }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.ckecked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    // this.setState({
    //   value: event.target.value,
    // });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Is numberOfGuest:
          <input name="numberOfGuest" type="number" value={this.state.numberOfGuest} onChange={this.handleChange} />
        </label>
      </form>

      // {/*<form onSubmit={this.handleOnSubmit}>*/}
      //   {/*<label>*/}
      //     {/*Name:*/}
      //     {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
      //   {/*</label>*/}
      //   {/*<input type="submit" />*/}
      //
      //   {/*<label>*/}
      //     {/*Pick your favorite La Croix flavor:*/}
      //     {/*<select value={this.state.value} onChange={this.handleChange}>*/}
      //       {/*<option value="grapefruit">Grapefruit</option>*/}
      //       {/*<option value="lime">Lime</option>*/}
      //       {/*<option value="coconut">Coconut</option>*/}
      //       {/*<option value="mango">Mango</option>*/}
      //     {/*</select>*/}
      //   {/*</label>*/}
      //   {/*<input type="submit" value="Submit" />*/}
      // // </form>
    );
  }
}

export default Form;

