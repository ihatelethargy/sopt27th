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

const getContentAPI = async () => {
  try {
    const { data } = await axios.get(`${url}/test`);
    console.log("[SUCCESS get test]", data);
    return data;
  } catch (e) {
    console.log("[FAIL get test]");
  }
};

export { getTestAPI, getIdolAPI, getContentAPI };

const api = { getTestAPI, getIdolAPI, getContentAPI };

export default api;
