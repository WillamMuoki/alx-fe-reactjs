 // src/components/UserProfile.jsx
import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 p-6 sm:p-8 max-w-sm sm:max-w-md md:max-w-lg mx-auto my-12 sm:my-20 rounded-lg shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 font-semibold">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
