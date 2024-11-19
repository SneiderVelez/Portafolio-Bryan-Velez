import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="flex flex-row relative bg-gradient-to-r from-white via-white to-darkGray h-screen">
      <Link to={"/"} className="absolute top-10 left-10">
        <button>
          <i class="fa-solid fa-arrow-left text-3xl text-teal hover:text-darkGray "></i>
        </button>
      </Link>
      <div className="flex flex-col gap-2 justify-center items-center w-3/12 xl:w-4/12">
        <h1 className="text-teal font-extrabold text-4xl uppercase ">
          Mis Proyectos
        </h1>
        <hr className="border-2 w-full border-black" />
      </div>
      <div className="flex-1 flex flex-col gap-3 pl-40 p-10 overflow-y-auto">
        {/* <CardProyectos></CardProyectos>
        <CardProyectos></CardProyectos> */}
      </div>
    </main>
  );
};

export default Projects;
