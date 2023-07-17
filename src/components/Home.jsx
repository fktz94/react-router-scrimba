import { Link } from 'react-router-dom';

export default function Home() {
  const bgImg =
    'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  return (
    <main className={`flex justify-center items-center bg-center bg-[url(${bgImg})]`}>
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
