'use client'
import NotLogin from '@/components/Desktop/Ui/NotLogin';
import UpdateIssueDesktop from '@/components/Desktop/Update Issue/UpdateIssueMain';
import UpdateIssueMobile from '@/components/Mobile/Update Issue/UpdateIssueMain';
import ResponsiveRenderer from '@/utils/Responsive Render/ResponsiveRender';
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
            <ResponsiveRenderer
                desktopComponent={<UpdateIssueDesktop />}
                mobileComponent={<UpdateIssueMobile />}
            />
        </div>
    );
};

export default Issues;
