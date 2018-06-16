import React        from 'react';
import template     from './template.html.js';
import Login        from '../../components/Auth/Login/Login.jsx';
import Register     from '../../components/Auth/Register/Register.jsx';

class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="home flex rows center centered">
                <Login />
                <Register />
            </div>
        )
    }
}

export default Home