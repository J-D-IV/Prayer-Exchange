import React from 'react';
import Axios from 'axios';
import Joy from './joy.jsx';
import Affirmation from './affirmation.jsx'
import Home from './home.jsx';
import Login from './login.jsx';
import Register from './Register.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      joy: '',
      view: 'home',
    }
    this.sendJoy = this.sendJoy.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeView = this.changeView.bind(this)
    this.checkLogin = this.checkLogin.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    // Axios.get('http://3.131.110.89:3000/api/joy') 
    Axios.get('http://localhost:3000/api/joy') 
      .then((joy) => {
        this.setState({
          joy: joy.data,
          view: 'home',
        })
      })
      .catch((err) => {
        console.log('GET did not work! -- ', err);
      })
    };

    checkLogin(email, password) {
     
      Axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      })
      .catch((err) => {
        return this.setState({
            view: 'login'
          })
      }) 

        this.setState({
          view: 'send'
        }) 
      
    }

    register(first, last, email, password, confirmedPassword){
      Axios.post('/register', {
        firstName: first,
        lastName: last,
        email: email,
        password: password,
        confirmPassword: confirmedPassword
      })
      .catch(err => {
        console.log(err)
      })
      this.setState({
        view: 'login'
      })
    }

    changeView(newView) {
      Axios.get('http://localhost:3000/api/joy') 
      .then((joy) => {
        this.setState({
          joy: joy.data,
        })
      })
      .catch((err) => {
        console.log('GET in changeView did not work! -- ', err);
      })

      this.setState({
        view: newView,
      })
    }

    sendJoy(joy, option){
      console.log('joy  ----  ', joy);
      let obj = {
        joy: joy,
      }
      console.log('obj ----', obj);
      Axios.post('http://localhost:3000/api/newjoy', {
        joy: joy,
      })
    //   Axios.post('http://3.131.110.89:3000/api/newjoy', {
    //   joy: joy,
    // })
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
      } else if (view === 'home') {
        return <Home changeView={this.changeView} />
      } else if (view === 'login') {
        return <Login validate={this.validate} checkLogin={this.checkLogin} changeView={this.changeView}  />
      } else if (view === 'register') {
        return <Register register={this.register}  />
      } 
      if (view === 'receive') {
        // Axios.get(`/api/blogs`)
        return <Affirmation changeView={this.changeView} joy={this.state.joy}/>;
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