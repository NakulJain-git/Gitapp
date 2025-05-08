// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <h1 className="text-2xl font-bold">GitHub Summariser</h1>
        </div>

        <nav>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white rounded-md transition"
          >
            Home
          </button>
        </nav>

      </div>
    </header>
  );
}
