import { createContext, useEffect, useReducer, FC, Dispatch } from 'react';
import { parseCookies } from 'nookies';
import { USER } from 'types/USER';
import { endpoints, fetcher } from 'utils';

interface IUserContext {
  user?: USER | null | undefined;
  userDispatch?: Dispatch<UserAction>;
}
const UserContext = createContext<IUserContext>({ user: null });

interface IUserProvider {
  children?: React.ReactNode;
}

interface UserState {
  user: USER | null | undefined;
}

interface UserAction {
  type: 'CLEAR_USER' | 'SET_USER';
  payload?: USER | null | undefined;
}

function reducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case 'SET_USER': {
      return { user: action.payload };
    }
    case 'CLEAR_USER': {
      return { user: null };
    }
    default:
      return state;
  }
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });
  const { gitlabUrl, privateToken } = parseCookies();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetcher({
        resource: endpoints.user,
      });
      console.log(response);
      if (response) {
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
