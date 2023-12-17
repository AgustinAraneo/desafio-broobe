'use client'
import ResponsiveRenderer from '@/utils/Responsive Render/ResponsiveRender';
import DesktopForm from '@/components/Desktop/Login/Form';
import MobileForm from '@/components/Mobile/Login/Form';

const Login = () => {
    return (
        <div>
            <ResponsiveRenderer
                desktopComponent={<DesktopForm />}
                mobileComponent={<MobileForm />}
            />
        </div>
    );
};

export default Login;
