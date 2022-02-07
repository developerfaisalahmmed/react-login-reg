import React, {Component} from 'react';
import Home from '../component/Home/Home'
import NavberNav from "../component/NavberNav/NavberNav";
class HomePage extends Component {
    render() {
        return (
            <div>
                <NavberNav/>
                <Home/>
            </div>
        );
    }
}

export default HomePage;
