import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" h-screen relative bg-gradient-to-r from-white via-white to-lightPink">
      <Link to={"/"}>
        <button className="absolute top-10 left-10">
          <i class="fa-solid fa-arrow-left text-3xl text-teal hover:text-darkGray "></i>
        </button>
      </Link>
      <img
        src="image/perfil3.png"
        alt="foto"
        className="h-5/6 w-auto rounded-bl-[80px] absolute right-0 shadow-black shadow-md opacity-65"
      />
      <div className="w-7/12 mx-48 flex flex-col gap-3 pt-52 ">
        <h1 className="text-teal font-extrabold text-4xl uppercase ">
          Sobre mí
        </h1>
        <hr className="border-2 border-black" />
        <p className="text-lg text-teal w-9/12 leading-10">
          Hola, soy Bryan Vélez, tengo 31 años y estudio desarrollo de software.
          Además, soy tecnólogo en electricidad industrial. Me apasiona la
          tecnología y siempre estoy buscando aprender más sobre programación y
          desarrollo web. Disfruto de combinar mis conocimientos técnicos con el
          diseño y la creatividad en mis proyectos.
        </p>
      </div>
    </section>
  );
};

export default About;
