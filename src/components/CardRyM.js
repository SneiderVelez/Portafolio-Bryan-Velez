const CardRickAndMorty = ({ imagen, nombre, estado, especie, sexo }) => {
  return (
    <main className="flex rounded-xl border border-gray-600 w-auto h-full hover:shadow-customBlack hover:scale-105">
      <figure className="flex flex-1">
        <img
          src={imagen}
          alt=""
          className="rounded-l-xl w-full h-full bg-cover bg-center"
        />
      </figure>
      <section className="flex flex-col flex-1 p-4 bg-skyBlue/10">
        <h1 className="text-white tracking-[2px] font-bold text-xs line-clamp-1">
          {nombre}
        </h1>
        <hr className="w-full border my-3" />
        <div className="font-Play text-sm text-white flex flex-col justify-center items-center ">
          <span>{sexo}</span>
          <span>{especie}</span>
          <span>{estado}</span>
        </div>
      </section>
    </main>
  );
};

export default CardRickAndMorty;
