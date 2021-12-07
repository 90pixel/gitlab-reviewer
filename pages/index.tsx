import type { NextPage } from 'next';
import swr from 'swr';
import Layout from 'layout';
import { Table } from 'components';
import { USER } from 'types/USER';

interface IData {
  data?: USER[];
}
const Dashboard: NextPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const { data }: IData = swr('/users');

  return (
    <Layout>
      <Table dataSource={dataSource} columns={columns} />
    </Layout>
  );
};

export default Dashboard;
