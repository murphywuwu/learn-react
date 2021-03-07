'use strict';
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Welcome(props) {
  return React.createElement(
    'h1',
    null,
    'Hello, ',
    props.name
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Welcome, null),
    React.createElement(Welcome, null),
    React.createElement(Welcome, null)
  );
}

var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Hello ',
        this.props.toWhat
      );
    }
  }]);

  return Hello;
}(React.Component);

var element = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello!'
  ),
  React.createElement(
    'h2',
    null,
    'Good to see you here'
  )
);

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this2.state = { date: new Date() };
    return _this2;
  }

  _createClass(Clock, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerId);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.timerId = setInterval(function () {
        return _this3.tick();
      }, 1000);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(
          'h2',
          null,
          'It is ',
          this.state.date.toLocaleTimeString()
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);
ReactDOM.render(Hello, domContainer);