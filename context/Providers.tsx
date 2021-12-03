import { FC } from 'react';
import { UserProvider } from './userStore';

interface IProviders {
  children: React.ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default Providers;
