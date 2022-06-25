import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './style';

interface NavLinkProps {
  title: string;
  path: string;
  includes?: boolean;
}

const NavLink = ({ title, path, includes = false }: NavLinkProps) => {
  const router = useRouter();

  const verifyIfIsActive = () => {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  };

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
};

export default NavLink;
