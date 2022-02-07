import React, {Component} from 'react';
import Regiester from '../component/Regiester/Regiester'
import NavberNav from "../component/NavberNav/NavberNav";

class RegiesterPage extends Component {
    render() {
        return (
            <div>
                <NavberNav/>

                <Regiester/>
            </div>
        );
    }
}

export default RegiesterPage;