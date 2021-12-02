import { FC } from 'react';
import { Input, Form, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { styled } from 'stitches.config';

interface ITokenField {
  gitlabUrl: string;
}

const TokenField: FC<ITokenField> = () => {
  return (
    <Form.Item
      label={
        <Label>
          <span>Private Token</span>
          <Tooltip
            title={
              <span>
                Token'ı gitlab sayfamızdan
                <strong style={{ margin: '0 10px' }}>
                  -/profile/personal_access_tokens
                </strong>
                adresinden alabiliriz. Örn:
                <br />
                <code>
                  https://gitlab.corpname.net/-/profile/personal_access_tokens
                </code>
              </span>
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        </Label>
      }
      name="token"
      rules={[
        {
          required: true,
          message: 'Lütfen token giriniz!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

export default TokenField;

const Label = styled('div', {
  span: {
    marginRight: 6,
  },
  a: {
    color: '$warning',
  },
});
