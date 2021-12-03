import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { styled } from 'stitches.config';
import { Input, Form, Button, Typography } from 'antd';
import { FormWrapper } from 'components';
import TokenField from './TokenField';
import { USER } from 'types/USER';
import { endpoints } from 'utils';

interface IValues {
  url: string;
  token: string;
}

const Login = () => {
  const [error, setError] = useState('');
  const { push } = useRouter();

  const onFinish = async (values: IValues) => {
    try {
      const request = await fetch(`${values.url}/api/v4/${endpoints.user}`, {
        headers: {
          'private-token': values.token,
        },
      });
      // JSON için bu kuralı kapatıyorum
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response: USER = await request.json();

      if (response.name) {
        setCookie(null, 'privateToken', values.token);
        setCookie(null, 'gitlabUrl', values.url);
        push('/dashboard');
      } else {
        setError('Token hatalı.');
      }
    } catch {
      setError('Geçerli bir endpoint girilmedi.');
    }
  };

  return (
    <FormWrapper onFinish={onFinish}>
      <Form.Item
        label="GitLab URL:"
        name="url"
        rules={[
          {
            required: true,
            message: 'Lütfen gitlab urlinizi giriniz!',
          },
          {
            pattern: new RegExp(/https?:\/\//g),
            message: 'url https formatı ile girilmeli',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <TokenField />

      <Form.Item
        wrapperCol={{
          offset: 6,
        }}
      >
        <SubmitBtn>
          <Button type="primary" htmlType="submit">
            Giriş Yap
          </Button>
          {error && <Typography.Text type="danger">{error}</Typography.Text>}
        </SubmitBtn>
      </Form.Item>
    </FormWrapper>
  );
};

export default Login;

const SubmitBtn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
