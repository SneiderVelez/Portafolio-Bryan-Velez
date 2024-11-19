const { Link } = require("react-router-dom");

const Contact = () => {
  return (
    <section className=" h-screen relative bg-gradient-to-r from-white via-white to-darkGray">
      <Link to={"/"}>
        <button className="absolute top-10 left-10">
          <i class="fa-solid fa-arrow-left text-3xl text-teal hover:text-darkGray "></i>
        </button>
      </Link>
      <div className="w-8/12 mx-48 flex flex-col gap-3 pt-52 ">
        <h1 className="text-teal font-extrabold text-4xl uppercase ">
          Contacto
        </h1>
        <hr className="border-2 border-black" />
        <p className="text-lg text-teal w-9/12 leading-10">
          ¡Conéctate conmigo en redes sociales! Sígueme en Facebook, Instagram y
          más para estar al tanto de mis proyectos, ver mis últimas creaciones y
          compartir juntos el camino en el mundo del desarrollo y la tecnología.
          No te pierdas ninguna actualización y únete a la conversación. ¡Nos
          vemos en redes!
        </p>
      </div>
      <div className="absolute right-20 top-10"></div>
    </section>
  );
};

export default Contact;
