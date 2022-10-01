import axios from "axios";

const apiKey = process.env.REACT_APP_WALMART_API_KEY;
const walmartUrl = "https://api.bluecartapi.com/request";

export const getProducts = (term) =>
  axios.get(walmartUrl, {
    params: {
      api_key: `${apiKey}`,
      type: "search",
      search_term: term,
      sort_by: "best_seller",
    },
  });
