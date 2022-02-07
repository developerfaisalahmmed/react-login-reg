import React, {Component} from 'react';
import Login from '../component/Login/Login'
import NavberNav from "../component/NavberNav/NavberNav";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <NavberNav/>

                <Login/>
            </div>
        );
    }
}

export default LoginPage;