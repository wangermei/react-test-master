import React from 'react';

class FancyBorde extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
}
function FancyBorder(props) {
  return (
    <div className={props.color}>
      {props.children}
    </div>
  );
}

export default FancyBorde;

