import { useEffect, useState } from 'react';

const ResponsiveRenderer = ({
    desktopComponent,
    mobileComponent,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? mobileComponent : desktopComponent;
};

export default ResponsiveRenderer;
