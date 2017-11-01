import React from 'react';
// import { connect } from 'dva';
// import styles from '../Index/Index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (e) e.stopPropagation();
    this.setState(prevState => ({  // prevState表示上一个状态值
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


export default Index;
