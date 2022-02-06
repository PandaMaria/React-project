import {Link} from 'react-router-dom';
import GridElement from '../components/GridElement';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Main() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <> 
        <h1>Your Mental Health</h1>
        <div>
            <p style={{textAlign: 'left'}}><strong><span style={{fontSize: '20px'}}>Here you will find informations for your mental health.</span></strong></p>
        </div>
        <GridElement/>
    </>
    )
}