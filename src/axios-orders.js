import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://ur-burger-builder-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
