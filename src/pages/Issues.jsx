'use client'
import IssuesDesktop from '@/components/Desktop/Issues/Issues';
import IssuesMobile from '@/components/Mobile/Issues/Issues';
import NotLogin from '@/components/Desktop/Ui/NotLogin';
import React, { useEffect, useState } from 'react';
import ResponsiveRenderer from '@/utils/Responsive Render/ResponsiveRender';

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
            <ResponsiveRenderer
                desktopComponent={<IssuesDesktop />}
                mobileComponent={<IssuesMobile />}
            />
        </div>
    );
};

export default Issues;
