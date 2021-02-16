import React from 'react';

const Home = (props) => (
<div>
    <button class="btn btn-primary btn-lg active" onClick={() => props.changeView('login')}>Login</button>
    <button class="btn btn-primary btn-lg active" onClick={() => props.changeView('register')}>Register</button>
</div>
)

export default Home;
