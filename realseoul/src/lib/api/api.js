import axios from "axios";

const url = "http://localhost";

const getTestAPI = async () => {
  try {
    const { data } = await axios.get(`${url}/quiz`);
    console.log("[SUCCESS get tests]", data);
    return data;
  } catch (e) {
    console.log("[FAIL get tests]");
  }
};

const getIdolAPI = async () => {
  try {
    const { data } = await axios.get(`${url}/idol`);
    console.log("[SUCCESS get idol]", data);
    return data;
  } catch (e) {
    console.log("[FAIL get idol]");
  }
};

export { getTestAPI, getIdolAPI };

const api = { getTestAPI, getIdolAPI };

export default api;
