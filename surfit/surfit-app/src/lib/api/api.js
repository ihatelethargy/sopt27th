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

const updateContent = async (id, body) => {
  const { data } = await axios.put(`${url}/${id}`);
  try {
    console.log("[SUCCESS UPDATE Content]");
    return data;
  } catch (e) {
    console.log("[FAIL UPDATE Content]");
  }
};

export { getContentsAPI, getContentAPI, updateContent };

const api = { getContentsAPI, getContentAPI, updateContent };

export default api;
