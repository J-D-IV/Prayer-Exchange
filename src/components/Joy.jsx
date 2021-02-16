import React from 'react';

class Joy extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      joy: '',
    }
  }

  sumbitForm(e){
    e.preventDefault()
    this.props.sendJoy(this.state.joy, 'receive')
  }

  render () {
    return (
      <div>
{/* 
        <div style={{
          fontSize: '2rem',
          color: 'white',
          textShadow: 'rgb(0, 0, 0) 4px 0px 0px, rgb(0, 0, 0) 6.575px 0.984375px 0px, rgb(0, 0, 0) 3.5px 1.90625px 0px, rgb(0, 0, 0) 2.921875px 2.71875px 0px, rgb(0, 0, 0) 2.15625px 3.359375px 0px, rgb(0, 0, 0) 1.25px 3.78125px 0px, rgb(0, 0, 0) 0.28125px 3.984375px 0px, rgb(0, 0, 0) -0.703125px 3.921875px 0px, rgb(0, 0, 0) -1.65625px 3.625px 0px, rgb(0, 0, 0) -2.5px 3.109375px 0px, rgb(0, 0, 0) -3.203125px 2.390625px 0px, rgb(0, 0, 0) -3.6875px 1.515625px 0px, rgb(0, 0, 0) -3.953125px 0.5625px 0px, rgb(0, 0, 0) -3.96875px -0.421875px 0px, rgb(0, 0, 0) -3.734375px -1.390625px 0px, rgb(0, 0, 0) -3.28125px -2.28125px 0px, rgb(0, 0, 0) -2.609375px -3.015625px 0px, rgb(0, 0, 0) -1.78125px -3.578125px 0px, rgb(0, 0, 0) -0.828125px -3.90625px 0px, rgb(0, 0, 0) 0.140625px -3.984375px 0px, rgb(0, 0, 0) 1.125px -3.828125px 0px, rgb(0, 0, 0) 2.046875px -3.421875px 0px, rgb(0, 0, 0) 2.828125px -2.8125px 0px, rgb(0, 0, 0) 3.4375px -2.03125px 0px, rgb(0, 0, 0) 3.828125px -1.109375px 0px, rgb(0, 0, 0) 3.984375px -0.125px 0px',
          fontWeight: 'bolder',
          textAlign: 'center',
          position: 'absolute',
          top: '20%',
          left: '50%',
          '-ms-transform': 'translateX(-50%) translateY(-30%)',
          '-webkit-transform': 'translate(-50%,-30%)',
          'transform': 'translate(-50%,-30%)',
          }}>
        SPREAD JOY <i className="fas fa-dove"></i>
        </div> */}

        <div style={{ margin: '0 auto'}}>
          <div class="input-group-d-flex input-group-lg">
            <form onSubmit={(e) => this.sumbitForm(e)}>
              <textarea 
                style={{ 
                  display: 'flex', 
                  textAlign: 'center', 
                  fontSize: '1.75rem', 
                  width: '30rem', 
                  height: '15rem',
                  backgroundColor: '#F1DEED',
                }} 
                onChange={(e) => this.setState({joy: e.target.value})} 
                class="input-group-text" 
                type="text" 
                placeholder="Insert some positivity here 😜" 
                required>
              </textarea>
              <button type="submit" 
                style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: 'bolder', 
                  width: '30rem', 
                  height: '4rem',
                  letterSpacing: '2px',
                  backgroundColor: '#6188C4',
                  color: 'white',
                }}>SEND YOUR JOY<span style={{ marginLeft: '20px' }}><i className="fas fa-dove"></i></span>
              </button>
              {/* <div class="input-group-append">
                <div class="input-group-text">@</div>
              </div> */}
            </form>
          </div>
        </div>

    </div>
    )      
  }
}

export default Joy