import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        navigate('/');
    }

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className="jumbotron">
            <span
                style={{ color: 'blue', fontSize: '30px', lineHeight: '50px', cursor: 'pointer' }}
                className="fa fa-arrow-left"
                aria-hidden="true"
                onClick={handleBack}
            >
            </span>
            <h1 >Welcome {localStorage.getItem('email')}</h1>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
