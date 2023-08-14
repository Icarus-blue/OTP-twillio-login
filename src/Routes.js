import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './component/login';
import HomePage from './component/homepage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;