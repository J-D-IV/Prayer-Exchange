import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      isTrue: null,
    }
  }

  // loginCheck(){
  //     Axios.post('http://localhost:3000/login', {
  //       email: email,
  //       password: password
  //     })
  //     .then(() => {
  //       return this.setState({})
  //     })
  //     .catch((err) => {
  //       return this.setState({
  //           isTrue: false
  //         })
  //     }) 
  // }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  } 
  render() {
    return (
      <div class="col-md-6">
        {/* <div>
        {this.state.isTrue === false ? (
              <Quantity getQuantity={this.getQuantity} />
            ) : (<span>Temporarily out of stock</span>
            )}
        </div> */}
          <form  onSubmit={() => this.props.checkLogin(this.state.email, this.state.password)}>
              <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input onChange={(e) => this.handleEmailChange(e)} name="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required/>
              </div>
              <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input onChange={(e) => this.handlePasswordChange(e)} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
              </div>
              <button type="submit" class="btn btn-primary" >Login</button>
          </form>
      </div>
    )
  }
}

  export default Login;

