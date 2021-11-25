import { FC } from 'react';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}
const Container: FC<IContainer> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled('div', {
  maxWidth: 1200,
  margin: '0 auto',
});
