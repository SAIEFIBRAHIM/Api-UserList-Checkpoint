import React, { useEffect, useState } from "react";
import Axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      {users.map((el, i) => (
        <div key={i}>
          <h1>
            {el.id} {el.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
