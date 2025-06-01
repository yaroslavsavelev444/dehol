import axios from "axios";

const sendReq = async (name, email, phone, captchaToken, endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await axios.post(`${API_URL}/${endpoint}`, {
    name,
    email,
    phone,
    captchaToken,
  });

  return res;
};

export default sendReq;
