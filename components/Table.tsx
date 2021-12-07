import { FC } from 'react';
import { Table as AntTable } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface ITable {
  dataSource: any[];
  columns: ColumnsType<any>;
}

const Table: FC<ITable> = ({ dataSource, columns }) => {
  return <AntTable dataSource={dataSource} columns={columns} />;
};

export default Table;
