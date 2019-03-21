import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "";

const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});
