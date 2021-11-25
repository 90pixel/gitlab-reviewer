import type { NextPage } from 'next';
import Layout from 'layout';

const Home: NextPage = () => {
  const handleLogin = () => {
    return console.log('xx');
  };
  return (
    <Layout>
      <button onClick={handleLogin}>giriş yap</button>
    </Layout>
  );
};

export default Home;
