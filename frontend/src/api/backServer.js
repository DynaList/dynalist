import axios from "axios";

const serverRequest = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
    Xrefresh: `${localStorage.getItem("refreshToken") || ""}`,
  },
});

export default serverRequest;
