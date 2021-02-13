import React from 'react';
import Axios from 'axios';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    Axios.get('/items') 
      .then((data) => {
        this.setState({
          items: data.data
        })
      })
      .catch((err) => {
        console.log('err', err);
      })
    };

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

export default App