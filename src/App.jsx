// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';

const pages = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/about',
    component: <About />
  },
  {
    path: '/vans',
    component: <Vans />
  },
  {
    path: '/vans/:id',
    component: <VanDetail />
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <NavBar pages={pages} />
      <Routes>
        {pages.map(({ path, component }) => {
          const uuid = crypto.randomUUID();
          return <Route key={uuid} path={path} element={component} />;
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
