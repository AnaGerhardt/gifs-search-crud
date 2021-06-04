import http from "./http";

export const searchGifs = async (search, offset, loadMore) => {
  const params = {
    api_key: process.env.REACT_APP_GIPHY_KEY,
    q: search,
    offset: offset ? offset : 0,
  };
  const req = http.get(searchGifs.url, params, loadMore);
  return req;
};

searchGifs.url = "/v1/gifs/search";
