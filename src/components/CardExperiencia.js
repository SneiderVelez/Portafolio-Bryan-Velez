import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const CardExperiencia = () => {
  const { desktop } = useScreenSize();
  const [mostrarPortafolio, setMostrarPortafolio] = useState(false);
  const [mostrarKuadra, setMostrarKuadra] = useState(false);
  const aleternarEstadoPortafolio = () => {
    setMostrarPortafolio(!mostrarPortafolio);
  };
  const aleternarEstadoKuadra = () => {
    setMostrarKuadra(!mostrarKuadra);
  };
  return (
    <main
      className="flex flex-col gap-6 lg:w-7/12 mx-auto mt-52 scroll-mt-40"
      id="experiencia"
    >
      <div className="flex items-center gap-3 ml-4 lg:ml-0">
        <h1 className="text-skyBlue font-extrabold text-xl md:text-2xl uppercase w-fit ">
          Mi experiencia
        </h1>
        {!desktop && <hr className="border-2 border-lightBlue flex-1 flex" />}
      </div>
      <section className="flex lg:flex-row flex-col gap-6">
        <article className="lg:w-40  flex flex-col gap-1 border-l border-lightBlue">
          <span
            className={` ${
              mostrarKuadra
                ? "bg-skyBlue/10 p-3 text-white tracking-[3px] text-sm cursor-pointer font-Play"
                : "p-3 w-full hover:bg-skyBlue/10 hover:text-white text-skyBlue tracking-[3px] text-sm cursor-pointer font-Play"
            }`}
            onClick={aleternarEstadoKuadra}
          >
            Kuadra
          </span>
          <span
            className={` ${
              mostrarPortafolio
                ? "bg-skyBlue/10 p-3 text-white tracking-[3px] text-sm cursor-pointer font-Play"
                : "p-3 w-full hover:bg-skyBlue/10 hover:text-white text-skyBlue tracking-[3px] text-sm cursor-pointer font-Play"
            }`}
            onClick={aleternarEstadoPortafolio}
          >
            Portafolio
          </span>
        </article>
        <section className="flex flex-col gap-3 lg:flex-1 lg:h-80 h-64 overflow-y-scroll no-scrollbar lg:mx-0 w-10/12 mx-auto">
          <div>
            {mostrarPortafolio && (
              <article className="flex flex-1 flex-row font-Play border-t border-lightBlue pt-5">
                <div className="flex flex-col">
                  <h1 className="text-lightBlue font-bold text-base lg:text-2xl">
                    Portafolio
                  </h1>
                  <span className="text-xs text-skyLightBlue tracking-[2px]">
                    2024
                  </span>
                </div>
                <div className="ml-10 lg:mt-3 flex flex-col gap-2">
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Diseñé la interfaz de mi portafolio
                    </p>
                  </div>
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      integre una API de Rick and Morty
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>
          <div>
            {mostrarKuadra && (
              <article className="flex flex-1 flex-row font-Play border-t border-lightBlue py-5">
                <div className="flex flex-col">
                  <h1 className="text-lightBlue font-bold text-base lg:text-2xl">
                    Kuadra
                  </h1>
                  <span className="text-xs text-skyLightBlue tracking-[2px]">
                    2023 - 2024
                  </span>
                </div>
                <div className="ml-10 lg:mt-5 flex flex-col gap-2">
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Maquetación de la landing de Kuadra
                    </p>
                  </div>
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Integrar con API de datos
                    </p>
                  </div>
                </div>
              </article>
            )}
            {mostrarKuadra && (
              <article className="flex flex-1 flex-row font-Play border-t border-lightBlue py-5">
                <div className="flex flex-col">
                  <h1 className="text-lightBlue font-bold text-base lg:text-2xl">
                    Kuadra
                  </h1>
                  <span className="text-xs text-skyLightBlue tracking-[2px]">
                    2023 - 2024
                  </span>
                </div>
                <div className="ml-10 lg:mt-5 flex flex-col gap-2">
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Maquetación de la landing de Kuadra
                    </p>
                  </div>
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Integrar con API de datos
                    </p>
                  </div>
                </div>
              </article>
            )}
            {mostrarKuadra && (
              <article className="flex flex-1 flex-row font-Play border-t border-lightBlue py-5">
                <div className="flex flex-col">
                  <h1 className="text-lightBlue font-bold text-base lg:text-2xl">
                    Kuadra
                  </h1>
                  <span className="text-xs text-skyLightBlue tracking-[2px]">
                    2023 - 2024
                  </span>
                </div>
                <div className="ml-10 lg:mt-5 flex flex-col gap-2">
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Maquetación de la landing de Kuadra
                    </p>
                  </div>
                  <div className="flex lg:items-center items-baseline gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Integrar con API de datos
                    </p>
                  </div>
                </div>
              </article>
            )}
            {mostrarKuadra && (
              <article className="flex flex-1 flex-row font-Play border-t border-lightBlue py-5">
                <div className="flex flex-col">
                  <h1 className="text-lightBlue font-bold text-base lg:text-2xl">
                    Kuadra
                  </h1>
                  <span className="text-xs text-skyLightBlue tracking-[2px]">
                    2023 - 2024
                  </span>
                </div>
                <div className="ml-10 lg:mt-5 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Maquetación de la landing de Kuadra
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-circle-check text-skyBlue text-xs"></i>
                    <p className="text-sm text-gray-400  font-Play tracking-[1px]">
                      Integrar con API de datos
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default CardExperiencia;
