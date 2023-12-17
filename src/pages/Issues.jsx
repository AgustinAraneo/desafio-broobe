'use client'
import IssuesMain from '@/components/Desktop/Issues/Issues';
import NotLogin from '@/components/Desktop/Ui/NotLogin';
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
            <IssuesMain />
        </div>
    );
};

export default Issues;
