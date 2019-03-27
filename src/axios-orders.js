import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-825ad.firebaseio.com/"
});

export default instance;
