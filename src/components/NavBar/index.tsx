import { FC } from "react";
import { MdSearch, MdHome, MdCalendarToday, MdTv, MdAdd } from "react-icons/md";
import { GiClapperboard } from "react-icons/gi";
import { NavLink } from "react-router-dom";

interface IProps {
  className?: string;
}

const iconStyle = "w-5 h-5";
const navLinkStyle = "p-5 border-l-2 text-gray-400 border-[#0d0d0d]";
const activeNavLinkStyle = `${navLinkStyle} text-gray-100 border-[#e50914]`;

const NavBar: FC<IProps> = ({ className }) => {
  return (
    <nav
      className={`flex flex-col h-full w-fit justify-center bg-secondary overflow-y-auto scrollbar-thin ${className}`}
    >
      <NavLink
        to="search"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <MdSearch className={iconStyle} />
      </NavLink>
      <NavLink
        to="dashboard"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <MdHome className={iconStyle} />
      </NavLink>
      <NavLink
        to="trend"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <MdCalendarToday className={iconStyle} />
      </NavLink>
      <NavLink
        to="tv"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <MdTv className={iconStyle} />
      </NavLink>
      <NavLink
        to="scene"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <GiClapperboard className={iconStyle} />
      </NavLink>
      <NavLink
        to="add"
        className={({ isActive }) =>
          isActive ? activeNavLinkStyle : navLinkStyle
        }
      >
        <MdAdd className={iconStyle} />
      </NavLink>
    </nav>
  );
};

export default NavBar;
