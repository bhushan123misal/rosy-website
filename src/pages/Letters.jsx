import React from 'react';

function Letters() {
  const notes = [
    {
      title: "If I Could Say One Thing",
      body: "You are worth all the chaos, distance, and doubt. And I’d still choose you — every time.",
    },
    {
      title: "On the Days We Drift",
      body: "Even when we aren’t in sync, I still carry you in my thoughts. You’re still my safe place.",
    },
    {
      title: "The One About Trying",
      body: "You trying to fix us... it means the world to me. That’s love. That’s you.",
    },
    {
      title: "Just Because",
      body: "Some days I scroll up through our chats just to hear your laugh in my head again.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-rose-600 mb-10">
          Letters to You
        </h1>
        <div className="space-y-8">
          {notes.map((note, index) => (
            <div key={index} className="bg-rose-50 rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                {note.title}
              </h2>
              <p className="text-lg leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Letters;
