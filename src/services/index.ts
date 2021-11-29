import axios from "axios";
import { Users } from "../interfaces/users";

export const getUsers = async():Promise<Users> => {
  const resp = await axios.get<Users>("https://jsonplaceholder.typicode.com/users");
  
  return resp.data;  
};