import axios from "axios";
import AppRoutes from "../routes/AppRoutes";


export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default AppRoutes

