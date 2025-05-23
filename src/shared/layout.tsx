import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
