import { Link } from "react-router-dom";

const Api = () => {
  return (
    <main className=" h-screen relative bg-gradient-to-r from-white via-white to-lightPink">
      <Link to={"/"}>
        <button className="absolute top-10 left-10">
          <i class="fa-solid fa-arrow-left text-3xl text-teal hover:text-darkGray "></i>
        </button>
      </Link>
      <div className="w-7/12 mx-48 flex flex-col gap-3 pt-52 ">
        <h1 className="text-teal font-extrabold text-4xl uppercase ">api</h1>
        <hr className="border-2 border-black" />
        <p className="text-lg text-teal w-9/12 leading-10">api</p>
      </div>
    </main>
  );
};

export default Api;
