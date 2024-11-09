import { useState } from "react";
import Card from "../../components/Card";
import Presentation from "../../components/Presentation";

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  return (
    <main className="flex flex-row h-screen">
      <section className="flex flex-col  justify-center items-center w-8/12 bg-white relative">
        <figure className="w-10/12 h-40 border-t-2 border-b-2 border-darkGreen flex lg:pl-10 xl:pl-20 items-center ">
          <Presentation setWelcomeMessage={setWelcomeMessage} />
        </figure>
      </section>
      <section className=" flex-1  bg-darkGray pr-20 hidden  lg:flex justify-center items-center relative">
        <Card />
        <p className="text-xs text-teal absolute bottom-10 right-2">
          {welcomeMessage}
        </p>
      </section>
    </main>
  );
};

export default Home;
