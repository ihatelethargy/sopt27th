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
  } catch (e) {
    console.log("[FAIL] GET MEMBER", e);
    throw e;
  }
};

const updateMember = async (id, member) => {
  try {
    const { data } = await axios.put(`${url}/${id}`, member);
    console.log("[SUCCESS] UPDATE MEMBER");
  } catch (e) {
    console.log("[FAIL] UPDATE MEMBER");
  }
};

export { getMemberAPI, getMember, updateMember };

const api = {
  getMemberAPI,
  getMember,
  updateMember,
};

export default api;
