import React from 'react';

function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <img
        src="https://source.unsplash.com/300x300/?girl,soft"
        alt="Rosy"
        className="rounded-full shadow-lg w-40 h-40 object-cover mb-6 border-4 border-white"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
        For Rosy, my Zhinge 
      </h1>

      <p className="max-w-xl text-base md:text-lg text-gray-700 leading-relaxed">
        We met for 10 minutes at TechFest. Two years of friendship followed.
        Then a rough beginning… and yet, we’ve lasted 3.5 years — even across oceans.
        <br /><br />
        This isn’t just a website. It’s my heart laid out in code.
        For the girl who understood me, teased me, and taught me what it means to stay.
        <br /><br />
        Welcome to our little corner of the internet....
      </p>
    </div>
  );
}

export default Home;
