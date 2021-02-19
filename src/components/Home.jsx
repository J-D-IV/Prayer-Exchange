import React from 'react';

const Home = (props) => (
<div className="row justify-content-center">
    <h1 style={{ color: '#4D535A', fontFamily: 'Dekko', textAlign: 'center', fontSize: '8rem', fontWeight: '900', marginBottom: '100px', textShadow: '5px 5px 5px white, 8px 8px #E2BEE8' }}>SPREAD JOY!</h1>
    <button id="button1home" style={{ fontWeight: 'bold', marginRight: '10px', textAlign: 'center', width: '200px' }} className="btn btn-secondary btn-lg active" onClick={() => props.changeView('login')}>Login</button>
    <button id="button2home" style={{ fontWeight: 'bold', marginLeft: '10px', textAlign: 'center', width: '200px' }} className="btn btn-secondary btn-lg col-12 active" onClick={() => props.changeView('register')}>Register</button>
</div>
)

export default Home;
