import { useContext } from 'react';
import type { NextPage } from 'next';

import Layout from 'layout';
import { UserContext } from 'context';

const Dashboard: NextPage = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <span>{user?.name}</span>
    </Layout>
  );
};

export default Dashboard;
