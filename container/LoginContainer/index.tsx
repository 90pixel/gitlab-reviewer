/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { styled } from 'stitches.config';
import { Input, Form, Button, Typography } from 'antd';
import TokenField from './TokenField';

// import { fetcher, endpoints } from 'utils';

const Login = () => {
  const [error, setError] = useState('');
  const { push } = useRouter();

  const onFinish = async (values: any) => {
    try {
      const request = await fetch(`${values.url}/api/v4/user`, {
        headers: {
          'private-token': values.token,
        },
      });
      const response = await request.json();
      if (response.name) {
        console.log(response);
        setCookie(null, 'privateToken', values.token);
        setCookie(null, 'gitlabUrl', values.url);
        // push('/dashboard');
      } else {
        setError('Token hatalı.');
      }
    } catch {
      setError('Geçerli bir endpoint girilmedi.');
    }
  };

  return (
    <CustomForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
    >
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
    </CustomForm>
  );
};

export default Login;

const CustomForm = styled(Form, {
  maxWidth: 600,
  margin: '0 auto',
});

const SubmitBtn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
