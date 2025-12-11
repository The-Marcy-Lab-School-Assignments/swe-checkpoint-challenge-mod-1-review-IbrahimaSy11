// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const banned = ["!", "#", "?"];

  for (const char of banned) {
    if (title.includes(char)) {
      return null;
    }
  }

  return title.toLowerCase().split(" ").join("-");
};

module.exports = {
  createSlug,
};