import { styled } from 'stitches.config';
import { Input, Form, Button, Typography } from 'antd';
import Layout from 'layout';

const Login = () => {
  const loginError = true;
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Layout>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Private Token"
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
        <Form.Item
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
        </Form.Item>

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
    </Layout>
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
