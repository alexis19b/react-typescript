import React, { useEffect, FC, useState } from "react";
import { getUsers } from "../services/index";

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
          ? <h1>Loaginf...</h1>
          : <h1>Ya cargo</h1>
      }
      <h1>Authors Route</h1>
    </>
  );
};
