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
    return data; //
  } catch (e) {
    console.log("[FAIL] UPDATE MEMBER");
  }
};

const createMember = async (member) => {
  try {
    const { data } = await axios.post(`${url}`, member);
    console.log("[SUCCESS] CREATE MEMBER");
    return data;
  } catch (e) {
    console.log("[FAIL] CREATE MEMBER");
  }
};

export { getMemberAPI, getMember, updateMember, createMember };

const api = {
  getMemberAPI,
  getMember,
  updateMember,
  createMember,
};

export default api;
