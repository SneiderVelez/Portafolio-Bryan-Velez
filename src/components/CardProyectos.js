const CardProyectos = () => {
  return (
    <main className="flex flex-col gap-6">
      <section className="p-3 flex gap-3 rounded-md relative h-72 w-full">
        <div className="flex flex-col justify-between w-6/12 z-50 h-full ">
          <div>
            <span className="text-[8px] text-darkBlue">Proyecto 1</span>
            <h1 className="text-lightPink font-bold">Portafolio</h1>
          </div>
          <div className="bg-lightGray rounded-md p-3 h-36 shadow-customRight flex flex-col gap-2  justify-center ">
            <p className="text-black text-xs line-clamp-4 leading-4">
              Una aplicación web para visualizar datos personalizados de
              Spotify. Consulta los artistas más destacados, las canciones más
              conocidas, las pistas reproducidas recientemente e información de
              audio detallada sobre cada pista. Crea y guarda nuevas listas de
              reproducción de pistas recomendadas en función de tus listas de
              reproducción existentes y mucho más.{" "}
            </p>
            {/* <a href="" className="text-xs">
              Ver mas...
            </a> */}
          </div>
          <div className="flex items-center gap-2 justify-around overflow-y-auto">
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              React
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              JavaScript
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              HTML
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              Tailwindcss
            </span>
          </div>
        </div>
        <figure className="rounded-md w-7/12 absolute right-0 z-20 h-auto">
          <img
            src="/image/portafolio.png"
            alt="portafolio"
            className="w-auto h-full bg-cover bg-center opacity-30 hover:opacity-100 rounded-md"
          />
        </figure>
      </section>
      <hr className="w-full" />
      <section className="p-3 flex gap-3 rounded-md relative h-72 w-full justify-end">
        <figure className="rounded-md w-7/12 absolute left-0 z-20 h-auto">
          <img
            src="/image/portafolio.png"
            alt="portafolio"
            className="w-auto h-full bg-cover bg-center opacity-30 hover:opacity-100 rounded-md"
          />
        </figure>
        <div className="flex flex-col justify-between w-6/12 z-50 h-full ">
          <div className="text-right">
            <span className="text-[8px] text-darkBlue">Proyecto 1</span>
            <h1 className="text-lightPink font-bold">Portafolio</h1>
          </div>
          <div className="bg-lightGray rounded-md p-3 h-36 shadow-customLeft flex flex-col gap-2  justify-center ">
            <p className="text-black text-xs line-clamp-4 leading-4">
              Una aplicación web para visualizar datos personalizados de
              Spotify. Consulta los artistas más destacados, las canciones más
              conocidas, las pistas reproducidas recientemente e información de
              audio detallada sobre cada pista. Crea y guarda nuevas listas de
              reproducción de pistas recomendadas en función de tus listas de
              reproducción existentes y mucho más.{" "}
            </p>
            {/* <a href="" className="text-xs">
              Ver mas...
            </a> */}
          </div>
          <div className="flex items-center gap-2 justify-around overflow-y-auto">
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              React
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              JavaScript
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              HTML
            </span>
            <span className="bg-lightPink px-2 py-1 rounded-full text-xs">
              Tailwindcss
            </span>
          </div>
        </div>
      </section>
      <hr className="w-full" />
    </main>
  );
};

export default CardProyectos;
