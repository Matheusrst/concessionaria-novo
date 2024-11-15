import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" className={router.pathname === '/' ? 'active-link' : ''}>
            Página Inicial
          </Link>
        </li>
        <li>
          <Link href="/historico" className={router.pathname === '/historico' ? 'active-link' : ''}>
            Histórico
          </Link>
        </li>
        <li>
          <Link href="/perfil" className={router.pathname === '/perfil' ? 'active-link' : ''}>
            Perfil
          </Link>
        </li>
        <li>
          {/* Link para a página de cadastro */}
          <Link href="/cadastro" className={router.pathname === '/cadastro' ? 'active-link' : ''}>
            Cadastro
          </Link>
        </li>
      </ul>
      <div className="profile-icon">
        <Link href="/perfil">
          <img src="/icons/profile.png" alt="Perfil" width={35} height={35} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
