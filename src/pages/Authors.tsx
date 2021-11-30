import axios from "axios";
import React, { useEffect, FC, useState } from "react";
import { CardItem } from "../components/CardItem";
import { Loading } from "../components/Loading";
import { Users } from "../interfaces/users";




export const Authors: FC = () => {

  const [user, setUser] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const getUsers = async () => {
      try {
        const { data } = await axios.get<Users[]>("https://jsonplaceholder.typicode.com/users");
        setUser(data);
        setLoading(false);
        console.log(data);

      } catch (error) {
        console.log(error);
        setLoading(false);

      }
    };
    getUsers();

  }, []);

  return (
    <>
      <div style={{
        paddingTop: "3rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
        gridGap: "1rem",
        gridAutoRows: "17rem"

      }}>

        {
          loading
            ? Array(10).fill(<Loading />)
            : user?.map(us => (
              <CardItem key={us.id} us={us} />
            ))

        }
      </div>

    </>
  );
};
