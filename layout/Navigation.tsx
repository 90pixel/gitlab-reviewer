import swr, { SWRResponse } from 'swr';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { Avatar, Badge, Tooltip } from 'antd';
import { styled } from 'stitches.config';
import { useUser } from 'hooks';
import { endpoints } from 'utils';
import { RequestType } from 'types/REQUESTS';
interface IResponse {
  response: RequestType[];
}

const Navigation = () => {
  const { push } = useRouter();
  const { user, userDispatch } = useUser();
  const { data }: SWRResponse<IResponse> = swr(endpoints.myOpenRequests);

  const firstLatters = user?.name
    .split(' ')
    .map((name) => name[0])
    .join('');

  const handleLogout = async () => {
    destroyCookie(null, 'gitlabUrl');
    destroyCookie(null, 'privateToken');
    push('/login');
    if (userDispatch) {
      userDispatch({ type: 'CLEAR_USER' });
    }
  };

  return (
    <StyledNavigation>
      <Link href="/">
        <a>Anasayfa</a>
      </Link>
      <button onClick={handleLogout}>Çıkış</button>

      <Tooltip title={user?.name}>
        <Badge count={data?.response?.length}>
          <Avatar src={user?.avatar_url}>{firstLatters}</Avatar>
        </Badge>
      </Tooltip>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled('nav', {
  fontSize: 20,
  'button,a': {
    ml: 10,
  },
  '.ant-badge': {
    ml: 10,
  },
});
