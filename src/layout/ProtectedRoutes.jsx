import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../common/AuthContext';

export default function ProtectedRoutes() {

    let auth = useAuth();

    return (
        auth?.user ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

