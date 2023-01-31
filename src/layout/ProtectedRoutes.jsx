import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../common/AuthContext';

export default function ProtectedRoutes() {

    let { user, token } = useAuth();

    return (
        token ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

