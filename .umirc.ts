import { defineConfig } from 'dumi';

export default defineConfig({
  // more config: https://d.umijs.org/config
  title: 'hu-ui',
  favicon: './images/husky.png',
  logo: './images/husky.png',
  outputPath: 'docs-dist',
  mode: 'site',

  base: './',
  publicPath: './',
  hash: true,
});
