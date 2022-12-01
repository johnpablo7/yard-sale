import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

const Router = () => {
  const elements = useRoutes(routes);
  return elements;
};

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};
