import React from 'react';
// import {connect} from 'dva';
// import styles from './IndexPage.css';
//
// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Hello! Welcome to my home!</h1>
//       <div className={styles.welcome} />
//     </div>
//   );
// }
//
// IndexPage.propTypes = {
// };
//
// export default connect()(IndexPage);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello,二妹</h1>
        <h2>this is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
