import React from 'react';

const Affirmation = (props) => (
  <div>
    <div style={{ fontSize: '3rem', margin: '0 auto', verticalAlign: 'center', textAlign: 'center'}}>
      {props.joy}
    </div>
    <div style={{ 
      fontSize: '1rem', 
      margin: '0 auto', 
      verticalAlign: 'center', 
      textAlign: 'center',
      }}>
      <button style={{ 
      fontWeight: 'bolder',
      backgroundColor: '#6188C4',
      color: 'white',
      }}
      onClick={
        () => props.changeView('send')
        }>Send more joy! 
      <i className="fas fa-dove"></i></button>
    </div>
  </div>
)

export default Affirmation
