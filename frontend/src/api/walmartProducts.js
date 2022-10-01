import axios from "axios";

const walmartUrl = "https://api.bluecartapi.com/request";
const apiKey = process.env.REACT_APP_WALMART_API_KEY;

export const getAllProducts = () =>
  axios.get(walmartUrl, {
    api_key: `${apiKey}`,
    type: "search",
    search_term: "highlighter pens",
    sort_by: "best_seller",
  });
