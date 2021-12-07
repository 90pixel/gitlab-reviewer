import type { NextPage } from 'next';
import Layout from 'layout';
import { useUser } from 'hooks';

const Dashboard: NextPage = () => {
  const { user } = useUser();
  return (
    <Layout>
      <span>{user?.name}</span>
    </Layout>
  );
};

export default Dashboard;
