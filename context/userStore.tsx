import { createContext, useState, useEffect, FC } from 'react';
import { parseCookies } from 'nookies';
import { USER } from 'types/USER';
import { endpoints, fetcher } from 'utils';

interface IUserContext {
  user: USER | null;
}
const UserContext = createContext<IUserContext>({ user: null });

interface IUserProvider {
  children?: React.ReactNode;
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<USER | null>(null);
  const { gitlabUrl, privateToken } = parseCookies();

  useEffect(() => {
    const getUser = async () => {
      const response: USER | null = await fetcher({
        resource: endpoints.user,
      });
      setUser(response);
    };
    if (gitlabUrl && privateToken) {
      getUser();
    }
  }, [gitlabUrl, privateToken]);

  const values = { user, setUser };

  return (
    <UserContext.Provider value={{ ...values }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
