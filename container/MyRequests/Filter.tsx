import swr, { SWRResponse } from 'swr';
import { DatePicker, Select } from 'antd';
import { endpoints } from 'utils';
import { User } from 'types/USER';

const { RangePicker } = DatePicker;

interface IResponse {
  response: User[];
}
interface FilterProps {
  handleSelectPerson: (e: number) => void;
  handleDateChange: (e: { start: string; end: string }) => void;
}

function Filter({ handleSelectPerson, handleDateChange }: FilterProps) {
  const { data }: SWRResponse<IResponse> = swr(endpoints.users);

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div>
        <label>Tarih aralığı seçiniz :</label>
        <RangePicker
          onChange={(e) => {
            handleDateChange({
              start: e?.[0]?.toISOString() || '',
              end: e?.[1]?.toISOString() || '',
            });
          }}
          style={{ marginBottom: 20, marginLeft: 8 }}
        />
      </div>
      {data?.response && (
        <div>
          <label>Reviewları incelenecek kişiyi seç :</label>
          <Select
            showSearch
            placeholder="Kişiyi seç.."
            optionFilterProp="children"
            style={{ marginLeft: 20, width: 200 }}
            onChange={handleSelectPerson}
          >
            {data.response.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
}
export default Filter;
