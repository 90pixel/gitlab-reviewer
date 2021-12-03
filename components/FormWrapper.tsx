import { FC } from 'react';
import { Form, FormProps } from 'antd';
import { styled } from 'stitches.config';

interface IFormWrapper {
  children: React.ReactNode;
}

const FormWrapper: FC<IFormWrapper | FormProps> = ({ children, ...props }) => {
  return (
    <CustomForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      {...props}
    >
      {children}
    </CustomForm>
  );
};

export default FormWrapper;

const CustomForm = styled(Form, {
  maxWidth: 600,
  margin: '0 auto',
});
