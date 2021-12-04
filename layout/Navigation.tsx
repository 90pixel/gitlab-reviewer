import Link from 'next/link';
import { Avatar, Badge, Tooltip } from 'antd';
import { styled } from 'stitches.config';
import { useUser } from 'hooks';

const Navigation = () => {
  const { user } = useUser();
  const firstLatters = user?.name
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <StyledNavigation>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>

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
});
