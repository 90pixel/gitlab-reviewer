import { parseCookies } from 'nookies';
import { styled } from '@stitches/react';
import { BranchesOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Link from 'next/link';
import Navigation from './Navigation';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { gitlabUrl, privateToken } = parseCookies();
  return (
    <CustomHeader>
      <Link href="/" passHref>
        <LogoSection>
          <BranchesOutlined />
          <span>Gitlab Reviewer</span>
        </LogoSection>
      </Link>
      {/* Eğer token ve url yoksa navigasyon gösterilmeyecek */}
      {!gitlabUrl && !privateToken && <Navigation />}
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled(AntHeader, {
  color: '#fff',
  p: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 38,
});

const LogoSection = styled('a', {});
