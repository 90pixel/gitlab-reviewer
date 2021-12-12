import Link from 'next/link';
import { styled } from '@stitches/react';
import { Layout } from 'antd';
import { BranchesOutlined } from '@ant-design/icons';
import { useUser } from 'hooks';

import Navigation from './Navigation';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { user } = useUser();

  return (
    <CustomHeader>
      <Link href={user ? '/' : '/login'} passHref>
        <LogoSection>
          <BranchesOutlined />
          <span>Gitlab Reviewer</span>
        </LogoSection>
      </Link>
      {/* Eğer token ve url yoksa navigasyon gösterilmeyecek */}
      {user && <Navigation />}
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled(AntHeader, {
  color: '#fff',
  p: 40,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 38,
});

const LogoSection = styled('a', {});
