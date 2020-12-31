'use strict'
// import React from 'react'
// import ReactDOM  from 'react-dom'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }
  }

  render() {
    if (this.state.kiked) {
      return 'You liked this.';
    }

    return (
      <Button onClick={() => this.setState({ liked: true })}> 
        Like
      </Button>
    )
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);


