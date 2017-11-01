import React from 'react';

function UserGreeting() {
  return <h1>Hello，二妹！</h1>;
}

function GuestGreeting() {
  return <h1>Hello，三妹！</h1>;
}

function Greeting(props) {
  const isLogginOn = props.isLogginOn;
  if (isLogginOn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function Greetin() {
  return (
    <Greeting isLogginOn={false} />
  );
}

export default Greetin;

