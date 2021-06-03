export const removeGif = async (title) => {
  return new Promise((resolve, reject) => {
    if (!title) {
      setTimeout(reject(new Error("Missing title")), 250);
    }
    setTimeout(resolve(true), 250);
  });
};
