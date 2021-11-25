import { styled } from '@stitches/react';
import { BranchesOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <CustomHeader>
      <BranchesOutlined />
      <span>90pixel Gitlab Review App</span>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled(AntHeader, {
  color: '#fff',
  p: 40,
  display: 'flex',
  alignItems: 'center',
  fontSize: 38,
});
