import { HeroesRoutes } from "../heroes";
import { LoginPages } from "../auth";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
