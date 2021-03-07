

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null ) {
    throw new TypeError('Super expression must either be null or a function, not' + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass, 
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  // superClass.prototype
  // subClass.prototype
  // instance

  // superClass
  // subClass
  
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  // 检查函数是否通过new调用
  if (!instance instanceof Constructor) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  // 检查React.Component是否在constructor中调用了super()
  if (!self) {
    throw new ReferenceError("this hasn't been initialized - super() hasn't been called");
  }

  // 返回结果
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protopRrops, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;  
  };
}();

/* class type elements */
var Hello = function(_React$Component) {
  _inherits(Hello, _React$Component)

  function Hello() {
    // 检查是否是通过new来调用Hello的
    _classCallCheck(this, Hello);

    // 初始化this
    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments))
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Hello',
        this.props.toWhat
      );
    }
  }])

  return Hello;
}(React.Component)

/* function type elements */
function Welcome(props) {
  return React.createElement(
    'h1',
    null,
    'Hello ',
    props.name
  );
}

/* normal type elements */
// an element is a plain object describing a component instance or DOM node and its desired properties
var element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
)

// {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// }

// <h1 class="greeting">'Hello, world!'</h1>

var domContainer = document.querySelector('#like_button_container');
ReactDom.render(React.createElement(Hello, { toWhat: 'World' }), domContainer)