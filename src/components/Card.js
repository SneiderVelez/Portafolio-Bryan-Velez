import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="absolute right-0 z-20">
      <section className="bg-verde rounded-l-full rounded-[30px] h-96 lg:w-[550px] xl:w-[800px] shadow-customBlack  flex relative">
        <img
          src="image/logo.png"
          alt="Foto"
          className="w-auto h-full rounded-full bg-cover bg-no-repeat bg-center "
        />
        <section className="flex justify-center flex-col gap-2 absolute lg:right-10 xl:right-20 translate-y-1/2 bottom-1/2">
          <Link to={"/sobre-mi"} className="w-40">
            <button className=" text-darkBlue  py-3 w-full rounded-md hover:bg-lightGray cursor-pointer hover:animate-bounce hover:shadow-lg">
              Más sobre mí
            </button>
          </Link>
          <Link to={"/contacto"}>
            <button className=" text-darkBlue  py-3 w-40 rounded-md hover:bg-lightGray cursor-pointer hover:animate-bounce hover:shadow-lg">
              Contacto
            </button>
          </Link>
          <Link to={"/proyectos"}>
            <button className=" text-darkBlue  py-3 w-40 rounded-md hover:bg-lightGray cursor-pointer hover:animate-bounce hover:shadow-lg">
              Proyectos
            </button>
          </Link>
          <Link to={"/API"}>
            <button className=" text-darkBlue  py-3 w-40 rounded-md hover:bg-lightGray cursor-pointer hover:animate-bounce hover:shadow-lg">
              API
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Card;
