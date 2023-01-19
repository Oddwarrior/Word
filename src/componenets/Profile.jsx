import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../common/AuthContext'

function Profile() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <Link to='/'>Home</Link>
            <button className='bg-red p-2 rounded' onClick={() => { logout(); navigate('/') }}>
                Logout
            </button>
        </div>
    )
}

export default Profile