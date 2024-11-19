import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

const About = () => {
  const { desktop } = useScreenSize();
  return (
    <section className="flex flex-col  gap-5 scroll-mt-28" id="sobre-mi">
      <section className="flex flex-col lg:flex-row items-center gap-5">
        <div className=" flex flex-col gap-3 lg:w-7/12">
          <div className="flex items-center gap-3 ml-4 lg:ml-0">
            <h1 className="text-skyBlue font-extrabold text-xl md:text-2xl uppercase w-fit ">
              Sobre mí
            </h1>
            <hr className="border-2 border-lightBlue flex-1 flex" />
          </div>
          <div className="flex flex-col w-11/12 mx-auto lg:w-full text-sm md:text-lg text-gray-400  font-Play tracking-[1px] ">
            <p>
              Hola, soy Bryan, estudio desarrollo de software. Además, soy
              tecnólogo en electricidad industrial. Me apasiona la tecnología y
              siempre estoy buscando aprender más sobre programación y
              desarrollo web. Disfruto de combinar mis conocimientos técnicos
              con el diseño y la creatividad en mis proyectos.
            </p>
            <p>
              He tenido el privilegio de trabajar en una startup como
              desarrollador frontend junior, donde he tenido la oportunidad de
              aprender sobre nuevas tecnologías y frameworks como React, Angular
              y Astro.
            </p>
          </div>
        </div>
        <section className="relative">
          {desktop && (
            <figure className="absolute -right-5 -bottom-5 h-[320px] w-[350px] rounded-xl border bg-lightBlue opacity-5 border-lightBlue z-0"></figure>
          )}
          <figure className="h-[280px] w-[280px]  md:h-[320px] md:w-[350px] bg-skyBlue/10 rounded-xl z-50">
            <div className="absolute h-[600px] w-[600px] right-[32%] md:right-1/2 translate-x-1/2 -top-20">
              <img
                src="/image/bryan.PNG"
                alt="Foto"
                className="h-[500px] w-[500px] md:h-[600px] md:w-[600px] bg-cover bg-no-repeat bg-center lg:opacity-30 hover:opacity-100 "
              />
            </div>
          </figure>
        </section>
      </section>
      <section className="flex flex-col gap-5 lg:mt-10">
        <p className="text-sm lg:text-xl text-lightBlue w-11/12 mx-auto lg:mx-0 font-Play tracking-[1px]">
          Estas son algunas de las tecnologías con las que he estado trabajando
          recientemente:
        </p>
        {desktop ? (
          <div className="flex items-center justify-between my-10 ">
            <figure className="h-auto w-[70px] animate-bounce">
              <img src="/image/html.png" alt="" />
            </figure>
            <figure className="h-auto w-16 animate-bounce">
              <img src="/image/css.png" alt="" />
            </figure>
            <figure className="h-auto w-24 animate-bounce">
              <img src="/image/js.png" alt="" />
            </figure>
            <figure className="h-auto w-16 animate-bounce">
              <img src="/image/react.png" alt="" />
            </figure>
            <figure className="h-auto w-16 animate-bounce">
              <img src="/image/angular.png" alt="" />
            </figure>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3 font-Play text-sm mb-5 p-4  bg-lightBlue">
            <span className="bg-darkBlueGray text-lightBlue flex justify-center items-center flex-1 py-2 rounded-lg">
              HTML
            </span>
            <span className="bg-darkBlueGray text-lightBlue flex justify-center items-center flex-1 py-2 rounded-lg">
              CSS
            </span>
            <span className="bg-darkBlueGray text-lightBlue flex justify-center items-center flex-1 py-2 rounded-lg">
              JavaScript
            </span>
            <span className="bg-darkBlueGray text-lightBlue flex justify-center items-center flex-1 py-2 rounded-lg">
              React
            </span>
          </div>
        )}
      </section>
    </section>
  );
};

export default About;
