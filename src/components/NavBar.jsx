import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="flex p-10 justify-between items-center bg-gray-200 text-black">
      <Link className="font-bold text-3xl tracking-tighter" to="/">
        #VANLIFE
      </Link>
      <nav>
        <ul className="flex gap-4">
          <Link className="text-xl font-semibold tracking-wide text-gray-800" to="/about">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
}
