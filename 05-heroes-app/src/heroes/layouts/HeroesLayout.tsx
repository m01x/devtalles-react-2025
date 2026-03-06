import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      <h1>Heroes Layout</h1>
      <Outlet />
    </div>
  );
};
