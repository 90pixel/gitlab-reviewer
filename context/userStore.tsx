import { createContext, useEffect, useReducer, FC, Dispatch } from 'react';
import { parseCookies } from 'nookies';
import { User } from 'types/USER';
import { endpoints, fetcher } from 'utils';

type userType = User | undefined;

interface IUserContext {
  user?: userType;
  userDispatch?: Dispatch<UserAction>;
}
const UserContext = createContext<IUserContext>({ user: undefined });

interface IUserProvider {
  children?: React.ReactNode;
}

interface UserState {
  user: userType;
}

interface UserAction {
  type: 'CLEAR_USER' | 'SET_USER';
  payload?: userType;
}

function reducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case 'SET_USER': {
      return { user: action.payload };
    }
    case 'CLEAR_USER': {
      return { user: undefined };
    }
    default:
      return state;
  }
}

interface ResponseType {
  response: userType;
  totalPages: number;
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: undefined });
  const { gitlabUrl, privateToken } = parseCookies();

  useEffect(() => {
    const getUser = async () => {
      const response: ResponseType = await fetcher<userType>(endpoints.user);
      if (response.response) {
        dispatch({ type: 'SET_USER', payload: response.response });
      }
    };
    if (gitlabUrl && privateToken) {
      getUser();
    }
  }, [gitlabUrl, privateToken]);

  return (
    <UserContext.Provider value={{ user: state.user, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
