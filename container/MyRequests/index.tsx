import { useEffect, useState } from 'react';
import swr, { SWRResponse } from 'swr';
import { Table } from 'components';
import { PersonCell } from 'components/TableCells';
import { endpoints, dateFormat } from 'utils';
import { useUser } from 'hooks';
import { RequestType } from 'types/REQUESTS';
import Filter from './Filter';

const columns = [
  {
    title: 'Başlık',
    dataIndex: 'title',
    key: 'title',
    width: 300,
  },
  {
    title: 'Repository',
    dataIndex: 'repo',
    key: 'repo',
  },
  {
    title: 'Reviewer',
    dataIndex: 'reviewer',
    key: 'reviewer',
  },
  {
    title: 'Yazar',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Oluşturulma Tarihi',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Mergelenme Tarihi',
    dataIndex: 'merged_at',
    key: 'merged_at',
  },
];

interface IResponse {
  response: RequestType[];
  totalPages: number;
  total: number;
}

function Dashboard() {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [reviewerId, setReviewerId] = useState<string>();
  const [dates, setDates] = useState({ start: '', end: '' });

  useEffect(() => {
    if (!reviewerId) {
      setReviewerId(user?.id.toString());
    }
  }, [reviewerId, user]);

  const handleSelectPerson = (personId: number) => {
    setReviewerId(personId.toString());
  };

  const handleDateChange = (selectedDates: { start: string; end: string }) => {
    setDates(selectedDates);
  };

  const { data, error }: SWRResponse<IResponse, Error> = swr(
    endpoints.request({
      per_page: perPage.toString(),
      page: currentPage.toString(),
      ...(reviewerId && { reviewer_id: reviewerId }),
      ...(dates.start && { updated_after: dates.start }),
      ...(dates.end && { updated_before: dates.end }),
    })
  );

  const renderTable = data && (
    <Table
      dataSource={data?.response?.map((item) => ({
        ...item,
        author: <PersonCell person={item.author} />,
        reviewer: <PersonCell person={item.reviewers[0]} />,
        created_at: dateFormat(item.created_at),
        merged_at: item.merged_at ? dateFormat(item.merged_at) : '-',
        // örnek repo adı: Front-end/xxx!192
        // Repo adında !192 referans kodunu ifade ediyor.
        // Bu isimden referans kodunu çıkarıyorum ve splash arasını açıyorum
        repo: item.references.full.split('!')[0].replace('/', ' / '),
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
      <Filter
        handleSelectPerson={handleSelectPerson}
        handleDateChange={handleDateChange}
      />
      {!data && !error ? (
        <Table dataSource={[]} columns={columns} loading />
      ) : (
        renderTable
      )}
    </div>
  );
}

export default Dashboard;
