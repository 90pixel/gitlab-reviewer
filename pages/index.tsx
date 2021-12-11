import type { NextPage } from 'next';
import Layout from 'layout';
import { MyRequests } from 'container';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <MyRequests />
    </Layout>
  );
};

export default Dashboard;
