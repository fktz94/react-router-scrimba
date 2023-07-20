import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-center">
      <div className="h-full w-full bg-[rgba(0,0,0,0.7)]">
        <div className="mx-10 my-20 flex flex-col gap-10">
          <h1 className="text-4xl font-extrabold tracking-wide leading-tight">
            You got the travel plans, we got the travel vans.
          </h1>
          <h4 className="font-medium tracking-wider">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to
            make your perfect road trip.
          </h4>
          <Link
            to="/vans"
            className="py-4 mt-10 font-bold text-xl tracking-wide rounded text-center bg-orange-400 ">
            Find your van
          </Link>
        </div>
      </div>
    </main>
  );
}
