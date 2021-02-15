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
            placeholder="Input your positivity here!" 
            required>
          </textarea>
          <button type="submit" 
            style={{ 
              fontSize: '1.35rem', 
              fontWeight: 'bolder', 
              width: '30rem', 
              height: '4rem',
              backgroundColor: '#6188C4',
              color: 'white',
            }}>Send this joy!! <i className="fas fa-dove"></i>
          </button>
        </form>
      </div>

    </div>)
  }
}

export default Joy