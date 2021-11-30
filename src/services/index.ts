import axios from "axios";
import { Users } from "../interfaces/users";

export const getUsers = async():Promise<Users[]> => {
  const {data} = await axios.get<Users[]>("https://jsonplaceholder.typicode.com/users");
  
  return data; 
};