import React, { Component } from 'react';

class ItemList extends React.PureComponent {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  state = {
    items: []
  }

  // initialize a counter that will increment
  // for each item ID
  nextItemId = 0;

  makeItem() {
    return {
      id: this.nextItemId++,
      value: Math.random()
    }
  }

  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()]
    })
  }

  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <button onClick={this.addItemMutably}>  
          Add item mutably (bad)
        </button>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}


export default App