import { FC, useEffect, useState } from 'react';
import swr, { SWRResponse } from 'swr';
import { Table } from 'components';
import { endpoints, fetcher } from 'utils';
import { RequestType } from 'types/REQUESTS';

const Dashboard: FC = () => {
  const columns = [
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
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
  const [test, setTest] = useState<RequestType[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDetails = async () => {
      if (data) {
        const pool: RequestType[] = [];
        for (const request of data) {
          const { project_id, iid } = request;
          const requestDetail: RequestType = await fetcher(
            endpoints.requestDetail({
              project_id,
              iid,
            })
          );
          pool.push(requestDetail);
        }
        setTest(pool);
        setLoading(false);
      }
    };

    getDetails();
  }, [data]);

  return (
    <div>
      {test && (
        <Table
          dataSource={test?.map((item) => ({
            ...item,
            author: item.author.name,
          }))}
          columns={columns}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Dashboard;
