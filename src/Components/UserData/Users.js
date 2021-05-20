import React, { useState, useEffect } from "react";
import UserItem from "./Useritem";
import axios from "axios";

function Users() {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => setUser(res.data));
  }, []);

    const [user, setUser] = useState([{}]);

  return (
    <div style={userStyle}>
      {user?.map((user) => {
        return <UserItem key={user.id} userData={user} />;
      })}
    </div>
  );
}

export default Users;
