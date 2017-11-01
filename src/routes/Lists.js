import React from 'react';

class Lists extends React.Component {
  // render() {                                 // demo1
  //   const numbers = [1, 2, 3, 4, 5, 6];
  //   const listItems = numbers.map((number) =>
  //     <li> { number }</li>,
  //   );
  //   return (
  //     <ul> {listItems} </ul>
  //   );
  // }

//   render() {                                   // demo2
//     const numbers = [1, 2, 3, 4, 5, 6];
//     return (
//       <NumberList numbers={numbers} />
//     );
//   }
// }
//
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItem = numbers.map((number) => <li key={number.index}>{ number }</li>);
//   return (
//     <ul>{listItem}</ul>
//   );

  // render() {                                        // demo3
  //   const numbers = [1, 2, 3, 4, 5, 6];
  //   return (
  //     <NumberList numbers={numbers} />
  //   );
  // }


// function List(props) {
//   const value = props.value;
//   return <li>{value}</li>;
// }
//
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <List key={number.toString()} value={number} />,
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

  // demo4

  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'},
    ];
    return (
      <Blog posts={posts}/>
    );
  }
}
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>{post.title}</li>,
      )}
    </ul>
  );
  const content = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </li>,
      )}
    </ul>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Lists;

