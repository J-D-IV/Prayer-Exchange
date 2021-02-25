import React from 'react';

const Affirmation = (props) => (
  <div>
    <div 
    className="d-flex"
    style={{ color: '#4D535A', fontFamily: 'Dekko', fontSize: '3.5rem', marginBottom: '50px', fontWeight: 'bolder', verticalAlign: 'center', textAlign: 'center', textShadow: '5px 5px 5px white, 8px 8px #E2BEE8'}}>
      {props.joy}
    </div>
    <div style={{ 
      fontSize: '1rem', 
      margin: '0 auto', 
      verticalAlign: 'center', 
      textAlign: 'center',
      }}>
      <button
      id="buttonAffirm"
      className="btn btn-secondary btn-lg active"
      style={{ 
      fontWeight: 'bolder',
      }}
      onClick={
        () => props.changeView('send')
        }>Send more joy! <i className="fas fa-dove"></i></button>
    </div>
  </div>
)

export default Affirmation
