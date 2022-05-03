import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Main = () => {
  return (
    <main id="main" className="flex bg-black h-full w-full overflow-y-auto">
      <NavBar className="" />
      <div className="flex-1 min-h-full overflow-y-auto scrollbar-thin hover:scrollbar-thumb-gray-900">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
