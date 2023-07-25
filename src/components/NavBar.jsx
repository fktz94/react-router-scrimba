import { Link, NavLink } from 'react-router-dom';

export function NavigationLink({ end = false, text, to, addStyle = '' }) {
  const activeLink = {
    color: 'rgba(0, 0, 0)',
    textDecorationLine: 'underline'
  };

  return (
    <NavLink
      className={`text-xl font-semibold tracking-wide text-gray-800 hover:text-black hover:underline underline-offset-8 ${addStyle}`}
      style={({ isActive }) => (isActive ? activeLink : null)}
      end={end}
      to={to}>
      {text}
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <header className="flex p-10 justify-between items-center bg-gray-200 text-black">
      <Link className="font-bold text-3xl tracking-tighter" to="/">
        #VANLIFE
      </Link>
      <nav>
        <ul className="flex gap-4">
          <NavigationLink text="Host" to="host" />
          <NavigationLink text="About" to="about" />
          <NavigationLink text="Vans" to="vans" />
        </ul>
      </nav>
    </header>
  );
}
