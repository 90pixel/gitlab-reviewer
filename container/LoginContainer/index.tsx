import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { styled } from 'stitches.config';
import { Input, Form, Button, Typography } from 'antd';
import { FormWrapper } from 'components';
import TokenField from './TokenField';
import { fetchUser } from 'utils';

interface IValues {
  url: string;
  token: string;
}

const Login = () => {
  const [error, setError] = useState('');
  const { push } = useRouter();

  const onFinish = async (values: IValues) => {
    const response = await fetchUser(values.url, values.token);

    if ('error' in response) {
      setError(response.error);
    } else {
      setCookie(null, 'privateToken', values.token);
      setCookie(null, 'gitlabUrl', values.url);
      push('/');
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
            message: 'URL https formatı ile girilmeli',
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
