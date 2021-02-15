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
    // Axios.get('http://3.131.110.89:3000/api/joy') 
    Axios.get('http://localhost:3000/api/joy') 
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
      let obj = {
        joy: joy,
      }
      console.log('obj ----', obj);
      Axios.post('http://localhost:3000/api/newjoy', {
        joy: joy,
      })
      // Axios.post('http://3.131.110.89:3000/api/newjoy', joy)
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
      <div>
        <div style={{
          fontSize: '5rem',
          color: 'white',
          textShadow: 'rgb(0, 0, 0) 4px 0px 0px, rgb(0, 0, 0) 5.875px 0.984375px 0px, rgb(0, 0, 0) 3.5px 1.90625px 0px, rgb(0, 0, 0) 2.921875px 2.71875px 0px, rgb(0, 0, 0) 2.15625px 3.359375px 0px, rgb(0, 0, 0) 1.25px 3.78125px 0px, rgb(0, 0, 0) 0.28125px 3.984375px 0px, rgb(0, 0, 0) -0.703125px 3.921875px 0px, rgb(0, 0, 0) -1.65625px 3.625px 0px, rgb(0, 0, 0) -2.5px 3.109375px 0px, rgb(0, 0, 0) -3.203125px 2.390625px 0px, rgb(0, 0, 0) -3.6875px 1.515625px 0px, rgb(0, 0, 0) -3.953125px 0.5625px 0px, rgb(0, 0, 0) -3.96875px -0.421875px 0px, rgb(0, 0, 0) -3.734375px -1.390625px 0px, rgb(0, 0, 0) -3.28125px -2.28125px 0px, rgb(0, 0, 0) -2.609375px -3.015625px 0px, rgb(0, 0, 0) -1.78125px -3.578125px 0px, rgb(0, 0, 0) -0.828125px -3.90625px 0px, rgb(0, 0, 0) 0.140625px -3.984375px 0px, rgb(0, 0, 0) 1.125px -3.828125px 0px, rgb(0, 0, 0) 2.046875px -3.421875px 0px, rgb(0, 0, 0) 2.828125px -2.8125px 0px, rgb(0, 0, 0) 3.4375px -2.03125px 0px, rgb(0, 0, 0) 3.828125px -1.109375px 0px, rgb(0, 0, 0) 3.984375px -0.125px 0px',
          fontWeight: 'bolder',
          textAlign: 'center',
          position: 'absolute',
          top: '20%',
          left: '50%',
          // '-ms-transform': 'translateX(-50%) translateY(-50%)',
          // '-webkit-transform': 'translate(-50%,-50%)',
          'transform': 'translate(-50%,-30%)',
        }}>
          SPREAD JOY <i className="fas fa-dove"></i>
        </div>
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
      </div>
     
    )
  }
}

export default App