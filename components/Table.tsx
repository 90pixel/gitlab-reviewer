import { FC } from 'react';
import { Table as AntTable, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface ITable {
  dataSource: any[];
  columns: ColumnsType<any>;
  loading?: boolean;
  totalPages?: number;
  pageSize?: number;
  currentPage?: number;
  onChange?: (e: TablePaginationConfig) => void;
}

const Table: FC<ITable> = ({
  dataSource,
  columns,
  loading,
  totalPages,
  pageSize,
  currentPage,
  onChange,
}) => {
  return (
    <AntTable
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      pagination={{ total: totalPages, pageSize, current: currentPage }}
      onChange={onChange}
    />
  );
};

export default Table;
