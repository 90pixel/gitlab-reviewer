import { useContext } from 'react';
import { UserContext } from 'context';

const useUser = () => {
  const { user, userDispatch } = useContext(UserContext);

  return { user, userDispatch };
};

export default useUser;
