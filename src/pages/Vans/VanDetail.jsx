import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VansTypeButton } from './Vans';
import data from '../../data.json';

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    const selectedVan = data.filter((item) => item.id === Number(params.id));
    setVan(selectedVan[0]);

    return () => setVan({});
  }, [params.id]);

  const { imageUrl, type, name, price, description } = van;

  return (
    <div className="flex flex-col m-5 my-8 px-5 py-10 gap-5 rounded text-black bg-slate-200 ">
      <img src={imageUrl} alt="" className="rounded" />
      <VansTypeButton type={type} />
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
