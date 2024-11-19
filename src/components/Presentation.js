import { useState } from "react";

const Presentation = ({ setWelcomeMessage }) => {
  const fullMessage = "Bienvenido a mi portafolio";
  const [intervalId, setIntervalId] = useState(null);

  const handleNameClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let index = -1;
    setWelcomeMessage(""); // Reinicia el mensaje antes de empezar a escribirlo

    const newIntervalId = setInterval(() => {
      if (index < fullMessage.length) {
        setWelcomeMessage((prev) => prev + fullMessage.charAt(index)); // Actualiza el mensaje en `Home`
        index++;
      } else {
        clearInterval(newIntervalId);
        setIntervalId(null);
      }
    }, 100);

    setIntervalId(newIntervalId);
  };

  return (
    <div className="flex items-center gap-20 scroll-mt-60" id="presentacion">
      <section className="flex flex-col justify-center items-center text-center gap-4 w-fit">
        <p className="lg:text-sm text-xs text-skyBlue tracking-widest w-fit">
          Hola, mi nombre es{" "}
        </p>
        <h1
          onClick={handleNameClick}
          className="text-lightBlue font-extrabold text-3xl md:text-6xl hover:animate-pulse cursor-pointer w-fit"
        >
          Bryan Sneider Vélez.
        </h1>
        <p className="md:text-lg text-sm text-gray-400 md:tracking-[4px] tracking-[1px] md:w-7/12">
          Soy un estudiante de desarrollo de software aprendiendo a crear
          experiencias digitales.
        </p>

        <button className="border text-white bg-skyBlue/10 lg:bg-transparent lg:border-skyBlue lg:text-skyBlue py-3 px-10 w-fit text-xs hover:bg-skyBlue/10 hover:text-white hover:border-none tracking-[3px] mt-10 rounded-md">
          Contactame
        </button>
      </section>
    </div>
  );
};
export default Presentation;
