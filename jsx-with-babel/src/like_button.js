'use strict'
// import React from 'react'
// import ReactDOM  from 'react-dom'

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false }
//   }

//   render() {
//     if (this.state.kiked) {
//       return 'You liked this.';
//     }

//     return (
//       <Button onClick={() => this.setState({ liked: true })}> 
//         Like
//       </Button>
//     )
//   }
// }
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome/>
      <Welcome/>
      <Welcome/>
    </div>
  )
}

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here</h2>
  </div>
)

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

let domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);
ReactDOM.render(
  element,
  domContainer
)

