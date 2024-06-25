import React, { useState } from "react";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule, AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const resources = [
  {
    id: 1,
    title: "You open up to the world",
    icon: <BsFillDoorOpenFill />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "New customers",
    icon: <FaPeopleCarry />,
    content: "Praesent varius urna id elit tincidunt interdum.",
  },
  {
    id: 3,
    title: "Much lower costs",
    icon: <FaMoneyBillAlt />,
    content: "Nullam in mi nec lorem tempor eleifend ut nec arcu.",
  },
  {
    id: 4,
    title: "No schedules",
    icon: <AiOutlineSchedule />,
    content: "Vivamus consectetur justo sed erat maximus ultrices.",
  },
  {
    id: 5,
    title: "Ultrasegmented marketing + high conversion",
    icon: <AiOutlineRise />,
    content: "Fusce vitae felis vitae lorem convallis hendrerit sit amet et enim.",
  },
  {
    id: 6,
    title: "Automation, less work, more performance",
    icon: <FiRepeat />,
    content: "Donec non metus ac nunc eleifend pellentesque.",
  },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const openDetails = (resource) => {
    setSelectedResource(resource);
  };

  const closeDetails = () => {
    setSelectedResource(null);
  };

  const colors = ["#f1ece6", "#f3bc41", "#f1ece6", "#f3bc41", "#f1ece6", "#f3bc41"];

  return (
    <div name="Semillero" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
          Semillero
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={resource.id} style={{ backgroundColor: colors[index % colors.length] }} className="shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-6xl text-blue-500 mb-4">
                {resource.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <button onClick={() => openDetails(resource)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
        {selectedResource && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedResource.title}</h2>
              <div className="text-2xl text-blue-500 mb-4">
                {selectedResource.icon}
              </div>
              <p className="text-gray-700">{selectedResource.content}</p>
              <button onClick={closeDetails} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
