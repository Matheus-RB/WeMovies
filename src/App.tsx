import { lazy } from "react";
import { SWRConfig } from "swr";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import api from "./services/api";
import Layout from "./components/Layout/Layout";
import { ErrorPage, NotFound } from "./erros";

const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const CheckoutSuccess = lazy(
  () => import("./pages/CheckoutSuccess/CheckoutSuccess")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "carrinho",
        element: <Cart />,
      },
      {
        path: "compra-finalizada",
        element: <CheckoutSuccess />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (url: string) => api.get(url).then((res) => res.data),
          revalidateOnFocus: false,
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </RecoilRoot>
  );
};
export default App;
