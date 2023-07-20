import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

export default function VansList() {
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    setVansList(data);
  }, []);

  const vanElements = vansList.map(({ id, imageUrl, name, price, type }) => {
    let style;
    switch (type) {
      case 'simple':
        style = 'bg-green-800';
        break;
      case 'rugged':
        style = 'bg-orange-300';
        break;
      case 'luxury':
        style = 'bg-black';
        break;
      default:
        style = undefined;
        return style;
    }

    return (
      <Link
        key={id}
        to={`/vans/${id}`}
        className="p-6 flex flex-col gap-2 rounded-md text-black bg-slate-200">
        <img src={imageUrl} alt={`The ${name} Van`} className="rounded-md" />
        <div className="flex items-stretch w-full justify-between">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-xl">{name}</h4>
            <span className={`rounded text-white w-24 font-semibold py-1 text-center ${style}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
          <p className="flex flex-col">
            <strong className="text-lg">${price}</strong>
            <small>/per day</small>
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="m-5 mt-8 flex flex-col gap-7">
      <h2 className="text-3xl font-bold">Explore our van options</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5">
        {vanElements}
      </div>
    </div>
  );
}
