import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CgProfile } from "react-icons/cg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <div className=" flex text-5xl justify-center items-center text-accent">
      <TailSpin ariaLabel="loading-indicator" />;
    </div>;
  } else
    return (
      <>
        <div className=" flex text-4xl my-8 justify-center font-medium text-accent ">
          Users List
        </div>
        <div className=" grid grid-flow-row grid-cols-3 gap-8 mx-12">
          {users.map((el, i) => (
            <div key={i}>
              <div className="card w-96 bg-base-300 shadow-xl items-center">
                <CgProfile
                  className=" mt-6 text-accent hover:text-accent-focus"
                  size={80}
                />
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-info-content">
                    {el.name}
                  </h2>
                  <p>{el.username}</p>
                  <p>{el.email}</p>
                  <div className="card-actions flex-col items-center justify-center">
                    <a
                      href={`tel:${el.phone}`}
                      className="badge badge-outline hover:bg-accent hover:text-white hover:border-0"
                    >
                      {el.phone}
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`http://${el.website}`}
                      className="badge badge-outline hover:bg-accent hover:text-white hover:border-0"
                    >
                      Go to Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

export default UserList;
