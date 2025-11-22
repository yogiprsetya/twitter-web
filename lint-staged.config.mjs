import path from 'path';

function toRelative(files) {
  return files.map((file) => path.relative(process.cwd(), file)).join(',');
}

export default {
  '*.{js,jsx,ts,tsx}': (files) => {
    const filesList = toRelative(files);
    return [
      `nx format:write --files=${filesList}`,
      `nx affected --target=lint --files=${filesList} --fix`,
    ];
  },

  '*.{json,md,css},!package-lock.json': (files) => {
    const filesList = toRelative(files);
    return [`nx format:write --files=${filesList}`];
  },
};
