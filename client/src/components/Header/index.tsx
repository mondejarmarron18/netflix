import { useNavigate } from "react-router-dom";
import path from "../../utils/path";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex h-fit w-full items-center flex-row justify-between px-12 py-7">
      <img
        src={`${path.public}/assets/images/logo.png`}
        alt="Logo"
        className="flex h-6 sm:h-7 md:h-9"
      />
      <button
        className="text-white text-sm sm:text-base bg-primary py-1 px-3 sm:px-5 rounded-sm"
        onClick={() => navigate("signIn")}
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;
