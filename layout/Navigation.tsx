import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { Avatar, Badge, Tooltip } from 'antd';
import { styled } from 'stitches.config';
import { useUser } from 'hooks';

const Navigation = () => {
  const { push } = useRouter();
  const { user, userDispatch } = useUser();

  const firstLatters = user?.name
    .split(' ')
    .map((name) => name[0])
    .join('');

  const handleLogout = async () => {
    // TODO: Çıkış yapılınca user contexti de temizlenecek.
    destroyCookie(null, 'gitlabUrl');
    destroyCookie(null, 'privateToken');
    push('/login');
  };

  return (
    <StyledNavigation>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <button onClick={handleLogout}>Çıkış</button>

      <Tooltip title={user?.name}>
        <Badge count={2}>
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
