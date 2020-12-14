import axios from "axios";

const url = "http://localhost/data";

const getContentsAPI = async () => {
  const { data } = await axios.get(url);
  try {
    console.log("[SUCCESS get Contents]");
    return data;
  } catch (e) {
    console.log("[FAIL get Contents]");
  }
};

const getContentAPI = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  try {
    console.log("[SUCCESS get Content]");
    return data;
  } catch (e) {
    console.log("[FAIL get Content]");
  }
};

export { getContentsAPI, getContentAPI };

const api = { getContentsAPI, getContentAPI };

export default api;
