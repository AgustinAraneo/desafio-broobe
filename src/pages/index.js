'use client'
import ResponsiveRenderer from '@/utils/Responsive Render/ResponsiveRender';
import IndexPC from '@/components/Desktop/Index';
import IndexMobile from '@/components/Mobile/Index';

const Index = () => {
  return (
    <ResponsiveRenderer
      desktopComponent={<IndexPC />}
      mobileComponent={<IndexMobile />}
    />
  );
};

export default Index;
