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
    <div className="z-40">
      <section className="flex flex-col ">
        <p className="text-lg text-darkBlue">Hola, mi nombre es </p>
        <h1
          onClick={handleNameClick}
          className="text-darkGray font-extrabold text-4xl z-50 hover:animate-pulse cursor-pointer"
        >
          Bryan Sneider Vélez.
        </h1>
        <p className="text-lg text-darkGray">
          Estudiante de desarrollo de software{" "}
        </p>
      </section>
    </div>
  );
};
export default Presentation;
