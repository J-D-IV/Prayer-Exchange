import React from 'react';

class Prayer extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      prayer: '',

    }
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

export default App