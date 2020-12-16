import axios from "axios";

const url = "http://localhost/quiz";

const getTestAPI = async () => {
  try {
    const { data } = await axios.get(url);
    console.log("[SUCCESS get tests]", data);
    return data;
  } catch (e) {
    console.log("[FAIL get tests]");
  }
};

export { getTestAPI };

const api = { getTestAPI };

export default api;
