import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './style';

interface NavLinkProps {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: NavLinkProps) => {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
};

export default NavLink;
