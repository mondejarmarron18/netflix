import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Main = () => {
  return (
    <main className="flex flex-col sm:flex-row bg-black h-full w-full">
      <NavBar />
      <div className="flex-1 overflow-hidden h-full scrollbar-thin hover:scrollbar-thumb-gray-900">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
