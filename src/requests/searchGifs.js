import http from "./http";

export const searchGifs = async (search) => {
  const params = {
    api_key: process.env.REACT_APP_GIPHY_KEY,
    q: search,
  };
  const req = http.get(searchGifs.url, params);
  return req;
};

searchGifs.url = "/v1/gifs/search";
