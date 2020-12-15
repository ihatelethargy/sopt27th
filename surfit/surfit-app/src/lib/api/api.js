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
  const { data } = await axios.put(`${url}/${id}`, body);
  try {
    console.log("[SUCCESS UPDATE Content]");
    return data;
  } catch (e) {
    console.log("[FAIL UPDATE Content]");
  }
};

const createContent = async (body) => {
  const { data } = await axios.post(url, body);
  try {
    console.log("[SUCCESS CREATE Content]");
    console.log(data);
    return data;
  } catch (e) {
    console.log("[FAIL CREATE Content]");
  }
};

const deleteContent = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  try {
    console.log("[SUCCESS DELETE Content]");
    console.log(data);
    return data;
  } catch (e) {
    console.log("[FAIL DELETE Content]");
  }
};

export {
  getContentsAPI,
  getContentAPI,
  updateContent,
  createContent,
  deleteContent,
};

const api = {
  getContentsAPI,
  getContentAPI,
  updateContent,
  createContent,
  deleteContent,
};

export default api;
