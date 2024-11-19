import { useEffect, useState } from "react";
import CardRickAndMorty from "../../components/CardRyM";
import Header from "../../components/Header";
import LoaderAllItems from "../../services/LoaderAllItems";
import useScreenSize from "../../hooks/useScreenSize";

const RickAndMorty = () => {
  const { desktop } = useScreenSize();
  const urlInicial = "https://rickandmortyapi.com/api/character";

  const [data, setData] = useState({
    info: null,
    results: [],
  });
  const [buscar, setBuscar] = useState("");
  const filtrarResultados = data.results.filter((personaje) =>
    personaje.name.toLowerCase().includes(buscar.toLowerCase())
  );

  const anterior = () => {
    if (data.info?.prev) {
      LoaderAllItems(setData, data.info.prev);
    }
  };
  const siguiente = () => {
    if (data.info?.next) {
      LoaderAllItems(setData, data.info.next);
    }
  };

  useEffect(() => {
    LoaderAllItems(setData, urlInicial);
  }, [setData]);

  return (
    <main className=" h-screen flex flex-col bg-darkBlueGray ">
      <Header></Header>
      <section className="flex flex-col lg:flex-row">
        <div className="flex-col flex w-full lg:w-4/12 relative h-fit lg:h-[calc(100vh-80px)] lg:pt-10 lg:pl-10">
          <figure className="lg:w-full flex items-center justify-center">
            <img
              src="/image/logoRyM.png"
              alt="Rick and Morty"
              className="w-96 h-auto"
            />
          </figure>
          {desktop && (
            <figure className="w-full flex items-center justify-center absolute bottom-0">
              <img src="/image/rickAndMorty.png" alt="" />
            </figure>
          )}
        </div>
        <div className="flex flex-col flex-1 rounded-xl p-4 border border-gray-600 m-6 shadow-customBlack h-[calc(100vh-130px)] ">
          <div className="relative ">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1 translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              className="shadow-customRight border border-gray-700 bg-transparent rounded-md w-full lg:w-5/12 pl-10 p-2 text-white font-Play tracking-[1px]"
              placeholder="Buscar"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-10 overflow-y-scroll no-scrollbar h-[30vh] lg:h-auto">
            {filtrarResultados.map((personaje) => (
              <CardRickAndMorty
                key={personaje.id}
                nombre={personaje.name}
                imagen={personaje.image}
                estado={personaje.status}
                especie={personaje.species}
                sexo={personaje.gender}
              />
            ))}
          </section>
          <div className="flex items-end gap-5 justify-center w-full h-fit">
            <button
              onClick={anterior}
              className="bg-rym text-darkBlueGray w-28 p-2 rounded-xl text-2xl py-1 hover:shadow-customWhite hover:bg-skyLightBlue"
            >
              <i className="fa-regular fa-hand-point-left"></i>
            </button>
            <button
              onClick={siguiente}
              className="bg-rym text-darkBlueGray w-28 p-2 rounded-xl text-2xl py-1 hover:shadow-customWhite hover:bg-skyLightBlue"
            >
              <i className="fa-regular fa-hand-point-right"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RickAndMorty;
