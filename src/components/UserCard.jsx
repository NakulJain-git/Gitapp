import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ userData, repos }) {
    const navigate = useNavigate(); // Hook for navigating to other routes

    useEffect(() => {
        if (!userData) {
            navigate('/'); // Navigate to the home page if userData is null
        }
    }, [userData, repos, navigate]);

    if (!userData) {
        return null;
    }

    return (
        <div className="text-2xl text-black font-mono p-6 rounded shadow-md min-w-full mx-auto mt-8 text-center">
            <img
                src={userData.avatar_url}
                alt="avatar"
                className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-2xl text-gray-700">@{userData.login}</p>
            <p className="mt-2 text-sm">{userData.bio}</p>

            <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold mt-2 block"
            >
                VIEW PROFILE
            </a>

            <div className="flex justify-around mt-6">
                <div className="bg-gray-100 rounded p-4 w-1/3">
                    <p className="font-semibold">Repository</p>
                    <p>{userData.public_repos}</p>
                </div>
                <div className="bg-gray-100 rounded p-4 w-1/3">
                    <p className="font-semibold">Followers</p>
                    <p>{userData.followers}</p>
                </div>
                <div className="bg-gray-100 rounded p-4 w-1/3">
                    <p className="font-semibold">Following</p>
                    <p>{userData.following}</p>
                </div>
            </div>

            {repos && repos.length > 0 && (
                <div className="mt-6 px-4">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Repositories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {repos.map((repo) => (
                            <div
                                key={repo.id}
                                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold mb-1">{repo.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{repo.language}</p>
                                <p className="text-gray-700 text-sm mb-2">{repo.description}</p>
                                <p className="text-xs text-gray-500">
                                    Created At: {new Date(repo.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserCard;
