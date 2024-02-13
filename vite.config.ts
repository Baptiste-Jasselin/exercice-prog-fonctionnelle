import { defineConfig } from 'vite';
import { resolve, parse } from 'node:path';
import { readdirSync, lstatSync } from 'node:fs';

const getHtmlEntries = (dir: string, result: string[] = []): string[] => {
  const directoryContent = readdirSync(dir);

  directoryContent.forEach((elm) => {
    const path = `${dir}/${elm}`;
    const stats = lstatSync(path);

    if (stats.isDirectory()) {
      result = getHtmlEntries(path, result);
    }

    if (stats.isFile() && elm.endsWith('.html')) {
      result.push(path);
    }
  });
  return result;
};

const getInput = (dir: string) => {
  const htmlEntries = getHtmlEntries(dir);

  return htmlEntries.reduce(
    (res, htmlFilePath) => {
      const relativePath = htmlFilePath.replace(`${dir}/`, '');
      const filename = relativePath.replace('/', '-');
      const name = parse(filename).name;

      res[name] = htmlFilePath;

      return res;
    },
    {} as Record<string, string>
  );
};

const input = getInput(`${__dirname}/pages`);

export default defineConfig({
  build: {
    rollupOptions: {
      input,
    },
  },
});
