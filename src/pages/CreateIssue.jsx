'use client'
import CreateIssueDesktop from '@/components/Desktop/Create Issue/CreateIssueMain';
import CreateIssueMobile from '@/components/Mobile/Create Issue/CreateIssueMain';
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
                desktopComponent={<CreateIssueDesktop />}
                mobileComponent={<CreateIssueMobile />}
            />
        </div>
    );
};

export default Issues;
