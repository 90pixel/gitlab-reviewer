import { useState, FC } from 'react';
import swr from 'swr';
import { Table } from 'components';
import { User } from 'types/USER';
import { endpoints } from 'utils';

interface IData {
  data?: User[];
}
const Dashboard: FC = () => {
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

  const { data: requestData }: IData = swr(endpoints.request());

  return (
    <div>
      <Table dataSource={requestData} columns={columns} />
    </div>
  );
};

export default Dashboard;
