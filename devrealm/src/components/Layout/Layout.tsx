import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { container } from "./Layout.css";

export function Layout() {
  return (
    <>
      <Header />
      <main className={container}>
        <Outlet />
      </main>
    </>
  );
}
