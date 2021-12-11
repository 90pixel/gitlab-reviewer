import { FC, useEffect } from 'react';
import swr, { SWRResponse } from 'swr';
import { Table } from 'components';
import { endpoints, fetcher } from 'utils';
import { RequestType } from 'types/REQUESTS';

const Dashboard: FC = () => {
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

  const { data }: SWRResponse<RequestType[]> = swr(endpoints.request());

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div>{data && <Table dataSource={data} columns={columns} />}</div>;
};

export default Dashboard;
