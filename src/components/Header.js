import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useScreenSize from "../hooks/useScreenSize";

const Header = () => {
  const { desktop } = useScreenSize();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (location.pathname === "/") {
      const section = document.querySelector("#presentacion");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#presentacion");
    }
  };
  return (
    <header className="flex justify-between items-center shadow-customBlackLarge px-5 h-20 lg:pr-20 lg:pl-10 sticky top-0 bg-darkBlueGray z-50 py-2">
      <figure
        onClick={handleNavigation}
        className="rounded-full bg-skyBlue/10 shadow-customWhite cursor-pointer"
      >
        <img
          src="/image/bryan.PNG"
          alt="logo"
          className="h-16 w-auto rounded-full"
        />
      </figure>
      {desktop ? (
        <section className="flex flex-row gap-5">
          <button className="  text-white cursor-pointer text-xs tracking-[1px] hover:tracking-[2px] ">
            <HashLink smooth to="#sobre-mi" className="hover:text-lightBlue">
              Más sobre mí
            </HashLink>
          </button>
          <button className="  text-white cursor-pointer text-xs tracking-[1px] hover:tracking-[2px] ">
            <HashLink smooth to="#experiencia" className="hover:text-lightBlue">
              Experiencia
            </HashLink>
          </button>
          <button className="  text-white cursor-pointer text-xs tracking-[1px] hover:tracking-[2px] ">
            <HashLink smooth to="#proyectos" className="hover:text-lightBlue">
              Proyectos
            </HashLink>
          </button>
          <button className="  text-white cursor-pointer text-xs tracking-[1px] hover:tracking-[2px] ">
            <Link to={"/rick-y-morty"} className="hover:text-lightBlue">
              Rick y Morty
            </Link>
          </button>
        </section>
      ) : (
        <section>
          <i className="fa-solid fa-bars text-lightBlue text-4xl"></i>
        </section>
      )}
    </header>
  );
};

export default Header;
