import { MdSearch, MdHome, MdCalendarToday, MdTv, MdAdd } from "react-icons/md";
import { GiClapperboard } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

const iconStyle = "w-5 h-5";
const navLinkStyle =
  "p-5 border-b-2 sm:border-b-0 sm:border-l-2 text-gray-400 border-[#0d0d0d]";
const activeNavLinkStyle = `${navLinkStyle} text-gray-100 border-[#e50914]`;

const NavBar = () => {
  const navBar = useRef<HTMLDivElement | null>(null);
  const [className, setClassName] = useState("");

  useLayoutEffect(() => {
    resizeNavBar();
    window.addEventListener("resize", resizeNavBar);
  }, []);

  const resizeNavBar = () => {
    const navBarHeight = navBar.current?.clientHeight || 0;
    const navBarStyle = navBarHeight <= 400 ? "start" : "center";

    setClassName(`sm:justify-${navBarStyle}`);
  };

  return (
    <nav
      ref={navBar}
      className={`z-10 flex sm:flex-col h-fit sm:h-full w-full sm:w-fit justify-around overflow-y-auto scrollbar-thin hover:scrollbar-thumb-gray-900 bg-secondary ${className}`}
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
