import { createContext, useEffect, useReducer, FC, Dispatch } from 'react';
import { parseCookies } from 'nookies';
import { USER } from 'types/USER';
import { endpoints, fetcher } from 'utils';

interface IUserContext {
  user?: USER | undefined;
  userDispatch?: Dispatch<UserAction>;
}
const UserContext = createContext<IUserContext>({ user: undefined });

interface IUserProvider {
  children?: React.ReactNode;
}

interface UserState {
  user: USER | undefined;
}

interface UserAction {
  type: 'CLEAR_USER' | 'SET_USER';
  payload?: USER | undefined;
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

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: undefined });
  const { gitlabUrl, privateToken } = parseCookies();

  useEffect(() => {
    const getUser = async () => {
      const response: USER | undefined = await fetcher<USER | undefined>(
        endpoints.user
      );
      if (response && response.name) {
        dispatch({ type: 'SET_USER', payload: response });
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
