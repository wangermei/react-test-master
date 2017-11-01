import React from 'react';

function LogicalOn(props) {
  const unmessages = props.unmessages;
  return (
    <div>
      <h1>Hello</h1>
      {unmessages.length > 0 &&
      <h2>
        you have {unmessages.length} unread messages
      </h2>
      }
    </div>
  );
}
class Logical extends React.Component {
  render() {
    const messages = ['React', 'Re: react', 'Rea: React'];
    return (
      <div>
        <LogicalOn unmessages={messages} />
      </div>
    );
  }
}


export default Logical;

