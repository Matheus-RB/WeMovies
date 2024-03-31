import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import { Loader } from "../Loader/Loader";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <Div>
              <Loader />
            </Div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
