import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../data.json';

function HostedVanCard({ id, imageUrl, name, price }) {
  return (
    <Link to={`${id}`} className="flex w-5/6 rounded border items-center gap-4 border-gray-400">
      <img src={imageUrl} alt={name} className="w-28 rounded" />
      <div className="flex flex-col">
        <h4 className="font-bold text-xl">{name}</h4>
        <span className="text-gray-700">${price}/day</span>
      </div>
    </Link>
  );
}

function HostVansList() {
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const hostedVans = data.filter(({ hostId }) => hostId === '123');
    setTimeout(() => {
      setVan(hostedVans);
      setIsLoading(false);
    }, 1000);

    return () => setVan(null);
  }, []);

  return (
    <div className="my-4 p-4 flex flex-col gap-10 rounded bg-slate-200 text-black">
      <h3 className="text-4xl font-semibold">Your listed vans</h3>
      {isLoading && <h1>Loading...</h1>}
      {van && (
        <div className="flex flex-col gap-4 items-center">
          {van.map(({ id, name, price, imageUrl }) => (
            <HostedVanCard key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HostVansList;
