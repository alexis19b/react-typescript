import React, { useEffect, FC, useState } from "react";
import { getUsers } from "../services/index";
import { Loading } from "../components/Loading";

import { Users } from "../interfaces/users";

export const Authors: FC = () => {
  const [user, setUser] = useState<Users>();

  useEffect(() => {

    getUsers().then(users => setUser(users));

  }, []);



  return (
    <>
      {
        !user
          ? <h1>Ya cargo</h1>
          : Array(3).fill(<Loading />)
      }
      <h1>Authors Route</h1>
    </>
  );
};
