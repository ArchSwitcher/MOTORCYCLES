import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import React from 'react'
import { PrincipalScreen } from "../components/PrincipalScreen";
import { LoginScreen } from "../components/LoginScreen";

export const RouteMotorcicle = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PrincipalScreen />} path={'/'}  > </Route>
                <Route element={<LoginScreen />} path={'/Login'}  > </Route>
            </Routes>
        </Router>
    )
}
