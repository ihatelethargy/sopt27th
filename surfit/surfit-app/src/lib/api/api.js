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

const getContentAPI = async ()

export { getContentsAPI };

export default api;
