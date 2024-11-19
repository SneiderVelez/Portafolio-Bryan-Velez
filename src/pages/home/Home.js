import { useState } from "react";
import Presentation from "../../components/Presentation";
import Header from "../../components/Header";
import About from "../about/About";
import CardExperiencia from "../../components/CardExperiencia";
import Proyectos from "../../components/Proyectos";
import useScreenSize from "../../hooks/useScreenSize";

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const { desktop } = useScreenSize();
  return (
    <div className="flex flex-col bg-darkBlueGray h-screen overflow-auto z-10">
      <Header></Header>
      <main className="flex flex-col">
        {desktop && (
          <section className="absolute flex flex-col items-center gap-4 left-8 bottom-0">
            <button className="hover:animate-bounce text-white text-xl">
              <a
                href="https://www.instagram.com/sneider.velez09/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-skyBlue hover:text-2xl"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </button>
            <button className="hover:animate-bounce text-white text-xl">
              <a
                href="https://www.facebook.com/share/19aVfDZc77/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-skyBlue hover:text-2xl"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </button>
            <button className="hover:animate-bounce text-white text-xl">
              <a
                href="https://www.facebook.com/share/19aVfDZc77/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-skyBlue hover:text-2xl"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </button>
            <hr className="h-20 w-0 border border-white" />
          </section>
        )}

        <section className="h-[calc(100vh-80px)] mx-auto w-full flex flex-col gap-5 items-center justify-center">
          <Presentation setWelcomeMessage={setWelcomeMessage} />
          <p className="text-xs text-lightBlue text-left ">{welcomeMessage}</p>
        </section>
        {desktop && (
          <section className="absolute flex flex-row items-center rotate-90 right-[-165px]  gap-4 -bottom-[-210px] ">
            <span className="text-white tracking-[5px] text-[8px] cursor-pointer hover:animate-bounce hover:text-skyBlue ">
              bryan.velez414@pascualbravo.edu.co
            </span>
            <hr className="h-0 w-20 border border-white" />
          </section>
        )}

        <section className=" lg:w-9/12 mx-auto h-[calc(100vh-80px)]">
          <About></About>
        </section>
        <section className="lg:w-9/12 lg:mx-auto h-[calc(100vh-80px)] ">
          <CardExperiencia></CardExperiencia>
        </section>
        <section className="lg:w-9/12 mx-auto lg:h-[calc(100vh-80px)] bg-lightBlue/5 lg:bg-transparent mt-20">
          <Proyectos></Proyectos>
        </section>
      </main>
      {!desktop && (
        <footer className="flex flex-col gap-3 items-center justify-center py-10 border-t">
          <h1 className="text-[10px] tracking-[2px] text-white">
            ¡Conéctate conmigo en redes sociales!
          </h1>
          <section className="flex items-center gap-10">
            <button className="text-white ">
              <a
                href="https://www.instagram.com/sneider.velez09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </button>
            <button className="text-white ">
              <a
                href="https://www.facebook.com/share/19aVfDZc77/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </button>
            <button className="text-white ">
              <a
                href="https://www.facebook.com/share/19aVfDZc77/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </button>
          </section>
          <span className="text-white tracking-[2px] text-xs font-Play ">
            bryan.velez414@pascualbravo.edu.co
          </span>
        </footer>
      )}
    </div>
  );
};

export default Home;
