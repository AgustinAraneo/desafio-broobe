'use client'
import NotLogin from '@/components/Desktop/Ui/NotLogin';
import UpdateIssueMain from '@/components/Desktop/Update Issue/UpdateIssueMain';
import React, { useEffect, useState } from 'react';

const Issues = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);
    if (!token) {
        return <NotLogin />;
    }

    return (
        <div>
            <UpdateIssueMain />
        </div>
    );
};

export default Issues;
