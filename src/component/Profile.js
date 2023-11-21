import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white  border-black border-4 p-8 w-2/4 ">
      <div className=" bg-white  border-black border-4 outline outline-2 mr-3 mt-1  ">
        {userData && (
          <div className=" h-56 bg-white m-5 flex flex-row pb-4 pt-1  ">
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
              className="m-4  border-black border-4 outline outline-2 "
            />

            <div className="p-4 ml-5 mt-4 justify-start">
                <div className="flex flex-row">
              <h1 className="text-black-600 font-serif mb-2 font-bold text-2xl ">
                {`${userData.name.first} `}
               
              </h1>
              <h1 className="text-black-600 font-serif mb-2 font-bold text-2xl pl-8"> {`${userData.name.last}`}</h1>
              </div>
              <h1 className="text-black-600 font-serif mb-2 font-bold text-2xl flex justify-start">
                {userData.gender}
              </h1>
              <h1 className="text-black-600 font-serif mb-2 font-bold text-2xl flex justify-start">
                {userData.phone}
              </h1>
    
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
