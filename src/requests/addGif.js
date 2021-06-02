export const addGif = async (title, image) => {
  return new Promise((resolve, reject) => {
    if (!title || !image) {
      setTimeout(reject(new Error("Missing title or image")), 250);
    }
    setTimeout(resolve(true), 250);
  });
};
