import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const CardProyectos = ({ img, titulo, descripcion, unidad }) => {
  const [mostrar, setMostrar] = useState(false);
  const alternarEstado = () => {
    setMostrar(!mostrar);
  };
  const { desktop } = useScreenSize();
  return (
    <div>
      {desktop ? (
        <div
          className="flex flex-col hover:shadow-customBlack rounded-xl h-fit cursor-pointer"
          onClick={alternarEstado}
        >
          <main className="  flex gap-2 relative">
            <figure
              className={`w-8/12 h-auto flex ${
                mostrar ? "rounded-tl-xl" : "rounded-l-xl"
              }`}
            >
              <img
                src={img}
                alt=""
                className={`w-full h-full ${
                  mostrar ? "rounded-tl-xl" : "rounded-l-xl"
                }`}
              />
            </figure>
            <span className="text-white flex gap-2 tracking-[3px] text-[8px] absolute top-2 right-2">
              Proyecto <strong className="text-white"> {unidad}</strong>
            </span>
            <section className="p-3 flex flex-1 flex-col absolute right-0 shadow-customWhite bg-white/20 rounded-l-xl top-0 translate-y-1/2">
              <h1 className="text-white text-5xl">{titulo}</h1>
            </section>
          </main>
          {mostrar && (
            <section>
              <p className="text-gray-400 font-Play text-xs w-11/12 mx-auto mt-5">
                {descripcion}
              </p>
              <div className="flex items-center justify-end gap-3 font-Play text-xs mb-5 w-11/12 mx-auto">
                <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                  HTML
                </span>
                <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                  CSS
                </span>
                <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                  JavaScript
                </span>
                <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                  React
                </span>
              </div>
            </section>
          )}
        </div>
      ) : (
        <section className="rounded-xl relative">
          <img
            src={img}
            alt=""
            className="h-full w-full bg-cover rounded-xl"
            onClick={alternarEstado}
          />
          {mostrar && (
            <div
              onClick={alternarEstado}
              className={`${
                mostrar &&
                "h-full w-full rounded-xl bg-darkBlueGray/90 p-3 absolute top-0 shadow-customLeft"
              }`}
            >
              <section className="p-1 px-3 flex flex-1 flex-col  shadow-customWhite bg-white/20 rounded-l-xl">
                <span className="text-white flex gap-2 tracking-[3px] text-[8px] ">
                  Proyecto <strong className="text-white"> {unidad}</strong>
                </span>
                <h1 className="text-white text-xl">{titulo}</h1>
              </section>
              <section>
                <p className="text-white font-Play text-[10px] mt-3 line-clamp-4 ">
                  {descripcion}
                </p>
                <div className="flex items-center justify-between gap-3 font-Play text-xs mt-3 pb-3">
                  <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                    HTML
                  </span>
                  <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                    CSS
                  </span>
                  <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                    JavaScript
                  </span>
                  <span className="bg-skyBlue/10 text-white px-3 rounded-full">
                    React
                  </span>
                </div>
              </section>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CardProyectos;
