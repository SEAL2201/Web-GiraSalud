import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDesktop, faUsers } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "ATENCIÓN PSICOLÓGICA",
    description: "Atención psicológica individual Atención psicológica niños Atención psicológica adolescentes. Asesoramiento para padres.Terapia de parejas.Terapia de duelo.Orientación vocacional adultos.Orientación vocacional adolescentes.",
    icon: faBrain
  },
  {
    title: "ATENCIÓN ONLINE - PSICOCLICK",
    description: "Sesiones de terapia en línea a través de nuestra plataforma PsicoClick.",
    icon: faDesktop
  },
  {
    title: "FORMACIÓN FAMILIAR Y EMPRESARIAL",
    description: "Programas de formación y talleres para familias y empresas.",
    icon: faUsers
  },
];

const Services = () => {
  return (
    <div name="Servicios" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">SERVICIOS</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          GIRASALUD te invita a que seas responsable de los hábitos que tú elijas ten por
          certeza que te enseñará recomendaciones para alimentarte bien, hacer ejercicio,
          dormir a tiempo, leer, compartir tiempo en familia, organizar tu espacio, cuidar de
          tus seres queridos, ayudar a las personas y sobre todo aquellas acciones que van
          a generarte bienestar en aquellos aspectos relevantes de tú vida.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-4xl text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
