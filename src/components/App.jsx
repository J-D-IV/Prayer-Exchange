import React from 'react';
import Axios from 'axios';
import Joy from './joy.jsx';
import Affirmation from './affirmation.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      joy: '',
      view: 'send',
    }
    this.sendJoy = this.sendJoy.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    Axios.get('http://3.131.110.89:3000/api/joy') 
    // Axios.get('http://localhost:3000/api/joy') 
      .then((joy) => {
        this.setState({
          joy: joy.data,
          view: 'send',
        })
      })
      .catch((err) => {
        console.log('GET did not work! -- ', err);
      })
    };

    sendJoy(joy, option){
      console.log('joy  ----  ', joy);
      // Axios.post('/api/newjoy', joy)
      Axios.post('http://3.131.110.89:3000/api/newjoy', joy)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })

      this.setState({
        view: option
      });
    }

    renderView() {
      const {view} = this.state;
      // console.log();
      if (view === 'send') {
        return <Joy sendJoy={this.sendJoy}/>;
      } else {
        // Axios.get(`/api/blogs`)
        return <Affirmation mount={this.componentDidMount} joy={this.state.joy}/>;
      }
    }

  render () {
    return (
      <div 
      className="body" 
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        // '-ms-transform': 'translateX(-50%) translateY(-50%)',
        // '-webkit-transform': 'translate(-50%,-50%)',
        'transform': 'translate(-50%,-50%)',
        }}>
        {this.renderView()}
      </div>
    )
  }
}

export default App