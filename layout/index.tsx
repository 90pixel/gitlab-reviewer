import React from 'react';
import { styled } from 'stitches.config';
import Head from 'next/head';
import { Layout as AntLayout } from 'antd';
import { Container } from 'components';
import Header from './Header';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <CustomLayout style={{ height: '100vh' }}>
      <Head>
        <title>Gitlab Reviewer by 90Pixel</title>
      </Head>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </CustomLayout>
  );
};

export default Layout;

const CustomLayout = styled(AntLayout, {
  height: '100vh',
});

const ContentWrapper = styled(Container, {
  marginTop: 40,
});
