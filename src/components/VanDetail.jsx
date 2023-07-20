import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    const selectedVan = data.filter((item) => item.id === Number(params.id));
    setVan(selectedVan[0]);

    return () => setVan({});
  }, [params.id]);

  const { imageUrl, type, name, price, description } = van;

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

  const vanType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="flex flex-col m-5 my-8 px-5 py-10 gap-5 rounded text-black bg-slate-200 ">
      <img src={imageUrl} alt="" className="rounded" />
      <span className={`rounded text-white w-24 font-semibold py-1 text-center ${style}`}>
        {vanType}
      </span>
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">
        <strong>${price}</strong>/day
      </span>
      <p>{description}</p>
      <button
        type="button"
        className="py-2 flex justify-center rounded font-semibold tracking-wide text-lg bg-orange-400 text-white">
        Rent this van
      </button>
    </div>
  );
}
