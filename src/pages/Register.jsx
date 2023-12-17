'use client'
import ResponsiveRenderer from '@/utils/Responsive Render/ResponsiveRender';
import RegisterDesktop from '@/components/Desktop/Register/RegisterMain';
import RegisterMobile from '@/components/Mobile/Register/RegisterMain';

const Login = () => {
    return (
        <div>
            <ResponsiveRenderer
                desktopComponent={<RegisterDesktop />}
                mobileComponent={<RegisterMobile />}
            />
        </div>
    );
};

export default Login;
