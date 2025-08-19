import React from 'react';

function Someday() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-sky-100 to-white px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Someday</h1>

        <p className="text-lg mb-8 leading-relaxed">
          Someday, we’ll live in Europe. We'll work, explore, cook together. Mornings won’t begin with calls — but coffee. Evenings won’t end with buffering screens — but your head on my chest.
        </p>

        <img
          src="https://source.unsplash.com/800x400/?northern-lights,stars,sky"
          alt="Northern Lights"
          className="rounded-xl shadow mb-8 object-cover w-full max-h-[400px]"
        />

        <p className="text-lg mb-8 leading-relaxed">
          You always dreamed of the northern lights. I dream of watching them with you. In silence. In awe. Wrapped in one jacket, not two phone screens.
        </p>

        <p className="text-xl italic text-indigo-800">
          Someday, it won’t be long distance.  
          It’ll just be… us.
        </p>
      </div>
    </div>
  );
}

export default Someday;
