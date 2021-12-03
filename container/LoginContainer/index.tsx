import { useState } from 'react';
import { styled } from 'stitches.config';
import { Input, Form, Button, Typography } from 'antd';
import TokenField from './TokenField';

import { fetcher, endpoints } from 'utils';

const Login = () => {
  const loginError = true;
  const [gitlabUrl, setGitlabUrl] = useState('');
  const onFinish = (values: any) => {
    console.log(values.url);
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
      // loginerror={loginError}
    >
      <Form.Item
        label="GitLab URL:"
        name="url"
        rules={[
          {
            required: true,
            message: 'Lütfen gitlab urlinizi giriniz!',
          },
        ]}
      >
        <Input
          onChange={(e) => {
            setGitlabUrl(e.target.value);
          }}
        />
      </Form.Item>

      <TokenField gitlabUrl={gitlabUrl} />

      {/* <Form.Item
        label="Yenileme Süresi"
        name="refreshRate"
        rules={[
          {
            required: true,
            message: 'Lütfen sayfa yenileme süresi giriniz!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 6,
        }}
      >
        <SubmitBtn>
          <Button type="primary" htmlType="submit">
            Giriş Yap
          </Button>
          {loginError && (
            <Typography.Text type="danger">Bir hata oluştu</Typography.Text>
          )}
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