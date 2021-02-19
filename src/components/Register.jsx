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
      <div className="row justify-content-center">

      <form onSubmit={() => this.props.register(this.state.first, this.state.last, this.state.email, this.state.password, this.state.confirmedPassword)}>
          <div className="form-group col-14">
              <input onChange={(e) => this.changeFirst(e)} name="firstName" type="text" className="form-control" id="firstNameInput" placeholder="First Name.." required/>
          </div>

          <div className="form-group col-14">
              <input onChange={(e) => this.changeLast(e)} name="lastName" type="text" className="form-control" id="lastNameInput" placeholder="Last Name.." required/>
          </div>

          <div className="form-group col-14">
              <input onChange={(e) => this.changeEmail(e)} name="email" type="email" className="form-control" id="emailInput" placeholder="Enter email.." required/>
          </div>

          <div className="form-group col-14">
              <input onChange={(e) => this.changePassword(e)} name="password" type="password" className="form-control" id="passwordInput" placeholder="Password.." required/>
          </div>

          <div className="form-group col-14">
              <input onChange={(e) => this.changeConfirmedPassword(e)} name="confirmPassword" type="password" className="form-control" id="confirmPasswordInput"
                  placeholder="Re-enter your password here.." required/>
          </div>

          <button id="buttonRegister" style={{ fontWeight: 'bold' }} type="submit" className="btn btn-secondary col-12">Submit</button>
      </form>
  </div>
    )
  }
}

export default Register;
