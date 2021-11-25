import { styled } from '@stitches/react';
import { BranchesOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Navigation from './Navigation';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <CustomHeader>
      <LogoSection>
        <BranchesOutlined />
        <span>Gitlab Reviewer</span>
      </LogoSection>
      <Navigation />
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

const LogoSection = styled('div', {});
