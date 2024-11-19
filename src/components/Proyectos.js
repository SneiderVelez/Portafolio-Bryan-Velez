import useScreenSize from "../hooks/useScreenSize";
import CardProyectos from "./CardProyectos";
const DESCRIP_PORTAFOLIO =
  "Un portafolio web para mostrar proyectos y habilidades en desarrollo web. Explora aplicaciones y sitios desarrollados con tecnologías modernas, revisa detalles sobre cada proyecto, como las herramientas y frameworks utilizados, y conoce más sobre la experiencia y formación del desarrollador. Encuentra ejemplos de interfaces interactivas, aplicaciones funcionales y mucho más.";
const DESCRIP_KUADRA = "Starup";

const Proyectos = () => {
  const { desktop } = useScreenSize();
  return (
    <main
      className="flex flex-col gap-6 mt-10 mb-40 scroll-mt-28 rounded-xl relative "
      id="proyectos"
    >
      {desktop && (
        <section className=" bg-lightBlue opacity-5  w-full h-full absolute rounded-xl my-10"></section>
      )}

      <section className="lg:p-6">
        <div className="flex items-center gap-3 ml-4 lg:ml-0">
          <h1 className="text-skyBlue font-extrabold text-xl md:text-2xl uppercase w-fit ">
            Mis proyectos
          </h1>
          <hr className="border-2 border-lightBlue flex-1 flex" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 w-11/12 mx-auto lg:w-auto lg:mx-0">
          <CardProyectos
            unidad={1}
            titulo={"Portafolio"}
            descripcion={DESCRIP_PORTAFOLIO}
            img={"/image/portafolio.png"}
          ></CardProyectos>
          <CardProyectos
            unidad={2}
            titulo={"Kuadra"}
            descripcion={DESCRIP_KUADRA}
            img={"/image/kuadra.png"}
          ></CardProyectos>
          <CardProyectos
            unidad={2}
            titulo={"Kuadra"}
            descripcion={DESCRIP_KUADRA}
            img={"/image/kuadra.png"}
          ></CardProyectos>
          <CardProyectos
            unidad={1}
            titulo={"Portafolio"}
            descripcion={DESCRIP_PORTAFOLIO}
            img={"/image/portafolio.png"}
          ></CardProyectos>
        </div>
      </section>
    </main>
  );
};

export default Proyectos;
