import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571192776145-9f563c1df686?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Välkommen till Hemma Glädje</h1>
            <p className="text-lg mb-8">Din källa för inspiration och tips om trädgård, renovering och inredning.</p>
            <Link to="/blogg" className="bg-lime-700 hover:bg-lime-900 text-white py-2 px-4 rounded">
              Utforska bloggen
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-medium mb-8 text-center">Om Hemma Glädje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-2">Trädgård</h3>
              <p className="text-gray-700">Upptäck våra tips och tricks för att skapa en vacker och hållbar trädgård.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-2">Renovering</h3>
              <p className="text-gray-700">Lär dig hur du kan renovera ditt hem på ett kostnadseffektivt och stilfullt sätt.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-2">Inredning</h3>
              <p className="text-gray-700">Få inspiration och idéer för att inreda ditt hem med personlighet och stil.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;