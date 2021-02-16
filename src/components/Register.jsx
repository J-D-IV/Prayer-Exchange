import React from 'react';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      confirmedPassword: '',
    }
  }
  changeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  changeFirst(e){
    this.setState({
      first: e.target.value
    })
  }

  changeLast(e){
    this.setState({
      last: e.target.value
    })
  }

  changePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  changeConfirmedPassword(e){
    this.setState({
      confirmedPassword: e.target.value
    })
  }

  render() {
    return (
      <div class="col-md-4">

      <form onSubmit={() => this.props.register(this.state.first, this.state.last, this.state.email, this.state.password, this.state.confirmedPassword)}>
          <div class="form-group">
              <label for="firstNameInput">First Name</label>
              <input onChange={(e) => this.changeFirst(e)} name="firstName" type="text" class="form-control" id="firstNameInput" required/>
          </div>

          <div class="form-group">
              <label for="lastNameInput">Last Name</label>
              <input onChange={(e) => this.changeLast(e)} name="lastName" type="text" class="form-control" id="lastNameInput" required/>
          </div>

          <div class="form-group">
              <label for="emailInput">Email address</label>
              <input onChange={(e) => this.changeEmail(e)} name="email" type="email" class="form-control" id="emailInput" placeholder="Enter email" required/>
          </div>

          <div class="form-group">
              <label for="passwordInput">Password</label>
              <input onChange={(e) => this.changePassword(e)} name="password" type="password" class="form-control" id="passwordInput" placeholder="Password" required/>
          </div>

          <div class="form-group">
              <label for="confirmPasswordInput">Confirm Password</label>
              <input onChange={(e) => this.changeConfirmedPassword(e)} name="confirmPassword" type="password" class="form-control" id="confirmPasswordInput"
                  placeholder="Re-enter your password here" required/>
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
      </form>
  </div>
    )
  }
}

export default Register;
