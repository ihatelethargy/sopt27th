import axios from "axios";

const url = "http://localhost/data";

const getMemberAPI = async () => {
  try {
    const { data } = await axios.get(`${url}`);
    console.log("[SUCCESS] GET MEMBERS", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMember = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    console.log("[SUCCESS] GET MEMBER", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getMemberAPI, getMember };

const api = {
  getMemberAPI,
  getMember,
};

export default api;
