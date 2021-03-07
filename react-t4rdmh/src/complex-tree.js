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
    items: [
      {id: 1, value: '狗狗'},
      { id: 2, value: '猫猫' }
    ]
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


  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}


export default App