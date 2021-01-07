import React, { Component } from 'react';
import { render } from 'react-dom';
// import './style.css'

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return { count: state.count + 1 }
    })
  }

  // render() {
  //   return [
  //     <button key="1" onClick={this.handleClick}>Update counter</button>,
  //     <span key="2">{this.state.count}</span>
  //   ]
  // }

  render() {
    return [
      React.createElement(
        'button',
        {
          key: '1',
          onClick: this.handleClick
        },
        'Update counter'
      ),
      React.createElement(
        'span',
        {
          key: '2'
        },
        this.state.count
      )
    ]
  }
}

window.ClickCounter = ClickCounter;
var ins = new ClickCounter()
// 1. every react element has a corresponding fiber node
// 2.unlike react elements, fibers aren't re-created on every render
console.log('react element', ins.render());
console.log('react element', React.createElement(ClickCounter));

render(<ClickCounter/>, document.getElementById('root'));

