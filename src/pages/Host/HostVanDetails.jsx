import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { VansTypeButton } from '../Vans/Vans';
import { NavigationLink } from '../../components/NavBar';
import data from '../../data.json';

// const van = {
//   id: 1,
//   name: 'Modest Explorer',
//   price: 60,
//   description:
//     'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
//   imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
//   type: 'simple',
//   hostId: '123'
// };

function HostVanDetailsLayout() {
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const matchedVan = data.filter((item) => item.id === Number(id));
    setTimeout(() => {
      setVan(matchedVan[0]);
      setIsLoading(false);
    }, 1000);

    return () => setVan(null);
  }, [id]);

  return (
    <div className="py-6">
      <Link to="./.." className="text-base hover:font-medium">
        ← <span className=" underline underline-offset-4">Back to all vans</span>
      </Link>
      <div className="my-4 p-4 flex flex-col gap-10 rounded bg-slate-200 text-black">
        {isLoading && <h1>Loading...</h1>}
        {van && (
          <div className="flex gap-4 items-center">
            <img src={van.imageUrl} alt={van.name} className="w-44 rounded" />
            <div className="flex flex-col gap-2">
              <VansTypeButton type={van.type} />
              <span className="text-3xl font-bold tracking-wide">{van.name}</span>
              <span className="text-xl">
                <strong>${van.price}</strong>/day
              </span>
            </div>
          </div>
        )}
        <nav className="flex gap-4">
          <NavigationLink addStyle="text-base underline-offset-6" to="." end text="Details" />
          <NavigationLink addStyle="text-base underline-offset-6" to="pricing" text="Pricing" />
          <NavigationLink addStyle="text-base underline-offset-6" to="photos" text="Photos" />
        </nav>
        <div className="flex flex-col gap-4">
          <Outlet context={{ van }} />
        </div>
      </div>
    </div>
  );
}

export default HostVanDetailsLayout;
