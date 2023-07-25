import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationLink } from './NavBar';

function HostLayout() {
  return (
    <>
      <nav className="flex px-10 py-4 justify-start items-center gap-5 bg-gray-200 text-black">
        <NavigationLink to="." end text="Dashboard" />
        <NavigationLink to="income" text="Income" />
        <NavigationLink to="vans" text="Vans" />
        <NavigationLink to="reviews" text="Reviews" />
      </nav>
      <div className="mx-10">
        <Outlet />
      </div>
    </>
  );
}

export default HostLayout;
