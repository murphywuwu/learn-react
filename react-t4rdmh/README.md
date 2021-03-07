### 组件第一次被挂载发生了什么？

react第一次渲染出DOM经历了哪些过程？

```
ReactDOM.render(<App/>, rootEl);
```

1. checkif App is class or a function

2. recursive get the react element
```
// if app is function
App(props)
```

```
// if app is class
new App(props)

componentWillMount()

render()
```

```
function isClass(type) {
  // React.Component subclasses have this flag
  return (
    Boolean（type.prototype) &&
    Boolean(type.prototype.isReactComponent)
  );
}

function mount(element) {
  var type = element.type;
  var props = element.props;

  // we will determine the rendered element
  // by either running the type as function
  // or creating an instance and calling render()

  var renderedElement;
  if (isClass(type)) {
    // Component class
    var publicInstance = new type(props);
    // Set the props
    publicInstance.props = props;
    // call the lifecycle if necessary
    if (publicInstance.componentWillMount) {
      publicInstance.componentWillMount();
    }

    // Get the rendered element by calling render();
    renderedElement = publicInstance.render(); 
  }
  else {
    // Component function
    renderedElement = type(props);
  }
  
  return mount(renderedElement)
}

var rootEl = document.getElementById('root');
var node = mount(<App />);
rootEl.appendChild(node);
```

