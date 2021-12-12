import { FC, useState } from 'react';
import swr, { SWRResponse } from 'swr';
import { Table } from 'components';
import { PersonCell } from 'components/TableCells';
import { endpoints } from 'utils';
import { useUser } from 'hooks';
import { RequestType } from 'types/REQUESTS';

const columns = [
  {
    title: 'Yazar',
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

interface IResponse {
  response: RequestType[];
  totalPages: number;
  total: number;
}

const Dashboard: FC = () => {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, error }: SWRResponse<IResponse, Error> = swr(
    endpoints.request({
      per_page: perPage,
      page: currentPage,
      ...(user && { reviewer_id: user.id }),
    })
  );

  const renderTable = data && (
    <Table
      dataSource={data?.response?.map((item) => ({
        ...item,
        author: <PersonCell person={item.author} />,
      }))}
      columns={columns}
      loading={!data && !error}
      pageSize={perPage}
      totalPages={data?.total}
      currentPage={currentPage}
      onChange={(e) => {
        if (e.current && e.pageSize) {
          setCurrentPage(e.current);
          setPerPage(e.pageSize);
        }
      }}
    />
  );
  return (
    <div>
      {!data && !error ? (
        <Table dataSource={[]} columns={columns} loading />
      ) : (
        renderTable
      )}
    </div>
  );
};

export default Dashboard;
