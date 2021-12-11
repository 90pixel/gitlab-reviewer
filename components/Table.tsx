import { FC } from 'react';
import { Table as AntTable } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface ITable {
  dataSource: any[];
  columns: ColumnsType<any>;
  loading?: boolean;
}

const Table: FC<ITable> = ({ dataSource, columns, loading }) => {
  return (
    <AntTable dataSource={dataSource} columns={columns} loading={loading} />
  );
};

export default Table;
