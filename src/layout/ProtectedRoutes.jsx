import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {

    let auth = false;

    return (
        auth ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

