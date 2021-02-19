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
      <div className="row justify-content-center">
        {/* <div>
        {this.state.isTrue === false ? (
              <Quantity getQuantity={this.getQuantity} />
            ) : (<span>Temporarily out of stock</span>
            )}
        </div> */}
          <form  onSubmit={() => this.props.checkLogin(this.state.email, this.state.password)}>
              <div className="form-group col-12">
                  <input onChange={(e) => this.handleEmailChange(e)} name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" required/>
              </div>
              <div className="form-group col-12">
                  <input onChange={(e) => this.handlePasswordChange(e)} name="password" type="password" className="form-control col-12" id="exampleInputPassword1" placeholder="Password" required/>
              </div>
              <button id="buttonlogin" style={{  fontWeight: 'bold' }} type="submit" className="btn btn-secondary col-12" >Login</button>
          </form>
      </div>
    )
  }
}

  export default Login;

