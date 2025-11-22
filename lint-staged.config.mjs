export default {
  '*.{js,jsx,ts,tsx}': (files) => {
    const filesList = files.join(',');
    return [
      `nx format:write --files=${filesList}`,
      `nx lint --files=${filesList}`,
    ];
  },

  '*.{json,md,css},!package-lock.json': (files) => {
    const filesList = files.join(',');
    return [`nx format:write --files=${filesList}`];
  },
};
