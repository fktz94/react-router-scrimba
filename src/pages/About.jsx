import { Link } from 'react-router-dom';

const bgImg =
  'https://lp-cms-production.imgix.net/features/2019/04/GettyImages-961232118-84f258c0fbe3.jpg';

export default function About() {
  return (
    <section className="bg-gray-100 text-black">
      <img src={bgImg} alt="Surfer in a van" className="h-72 w-full object-cover object-[0,75%]" />
      <article className="flex flex-col gap-14 items-center p-14">
        <h2 className="font-bold text-4xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <div className="flex flex-col gap-4 font-semibold">
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans
            are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉).
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the
            world on 4 wheels.
          </p>
        </div>
        <div className="p-10 flex flex-col gap-10 w-full rounded bg-orange-300">
          <h4 className="text-3xl font-bold">
            Your destination is waiting.
            <br /> Your van is ready.
          </h4>
          <Link
            to="/vans"
            className="w-fit px-5 py-3 rounded-lg font-semibold bg-gray-900 text-gray-100">
            Explore our vans
          </Link>
        </div>
      </article>
    </section>
  );
}
