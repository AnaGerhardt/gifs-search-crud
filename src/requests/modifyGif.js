export const modifyGif = async (title, newTitle) => {
  return new Promise((resolve, reject) => {
    if (!title || !newTitle) {
      setTimeout(reject(new Error("Missing title or new title")), 250);
    }
    setTimeout(resolve(true), 250);
  });
};
