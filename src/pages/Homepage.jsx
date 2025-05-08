import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage({ user, setUser, userData, setUserData, repos, setRepos }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (user.trim() === '') {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        setError('User not found, please try again.');
        setUserData(null);
        return;
      }

      setError(''); // Clear any previous errors

      const repoRes = await fetch(`https://api.github.com/users/${user}/repos`);
      const res = await repoRes.json();
      setRepos(res);
      setUserData(data);
      navigate(`/user/${data.login}`);
    } catch (error) {
      console.error(error);
      setUserData(null);
      setError('Something went wrong. Try again.');
    }
  };

  return (
    <div className='text-white max-h-screen flex flex-col items-center justify-center gap-4 mt-20'>

      <div className='h-1/5 w-1/5 flex items-center justify-center'>
        <img
          src="https://githubapplication.ashish454570.vercel.app/static/media/git.25a19f4a.png"
          alt="Git Logo"
          className='w-full h-full object-contain'
        />
      </div>

      {error && <p className="text-red-500 text-lg font-semibold">{error}</p>}

      <div className='text-center'>
        <input
          className={`w-[400px] text-xl px-4 py-4 rounded shadow-md ${
            error ? 'border-2 border-red-500' : 'border border-transparent'
          } text-black`}
          placeholder='Enter the name of Git Profile'
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
            if (error) setError(''); // Clear error on typing
          }}
        />
      </div>

      <div className='text-center mt-4'>
        <button className='w-64 bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-700'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Homepage;
