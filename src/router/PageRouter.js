import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegiesterPage from '../pages/RegiesterPage'

class PageRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegiesterPage />} />
                </Routes>
            </div>
        );
    }
}

export default PageRouter;
