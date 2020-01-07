import axios from "axios";

const instace = axios.create({
  baseURL: "https://react-my-burger-1a4fb.firebaseio.com/"
});

export default instace;
