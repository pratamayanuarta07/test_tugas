import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('role');
        //sessionStorage.removeItem('token');
        navigate(`/`);
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default Logout;
