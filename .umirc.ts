import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hu-ui',
  favicon: './images/husky.png',
  logo: './images/husky.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config

  hash: true,
  publicPath: './',
  base: './',
});
