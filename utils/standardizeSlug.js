export const standardizeSlug = (slug) => {
  const newSlug = slug.replace(/-/g, "_");
  return newSlug;
};
