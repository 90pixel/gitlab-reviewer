import { styled } from 'stitches.config';
import Head from 'next/head';
import { Layout as AntLayout } from 'antd';
import { Container } from 'components';
import Header from './Header';

const Layout = () => {
  return (
    <AntLayout>
      <Head>
        <title>Gitlab Review App by 90Pixel</title>
      </Head>
      <Header />
      <ContentWrapper>Layout</ContentWrapper>
    </AntLayout>
  );
};

export default Layout;

const ContentWrapper = styled(Container, {
  // marginTop: 40,
});
