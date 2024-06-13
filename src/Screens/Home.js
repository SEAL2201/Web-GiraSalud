import React from "react";
// import { Link } from "react-scroll";
// import background from './assets/background.jpeg';
import background from '../assets/background.jpeg';

const Home = () => {
  return (
    <div
      name="Inicio"
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <div className="text-left text-white">
          <h1 className="text-5xl font-bold animate-pulse">GIRASALUD TU CENTRO DE PSICOLÓGIA</h1>
          <div class="flex justify-center"></div>
          <h1 className="text-5xl font-bold animate-pulse">BIENVENIDO!</h1>
        </div>
        {/* <div className="mt-8">
          <Link
            to="Contact"
            smooth
            duration={500}
            className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-700"
          >
            Get in Touch
          </Link>
          <Link
            to="Contact"
            smooth
            duration={500}
            className="bg-green-500 text-white py-2 px-4 rounded m-2 hover:bg-green-700"
          >
            Get a Quote
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
