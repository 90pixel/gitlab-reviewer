import Link from 'next/link';
import { styled } from 'stitches.config';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled('nav', {
  fontSize: 20,
});
