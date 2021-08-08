import { defineConfig } from 'dumi';

// 线上 github-pages 的子项目路径
const PROJECT_PATH = '/hu-ui/';

export default defineConfig({
  // more config: https://d.umijs.org/config
  title: 'hu-ui',
  favicon: './images/husky.png',
  logo: './images/husky.png',
  outputPath: 'docs-dist',
  mode: 'site',

  // 二级项目地址配置
  base: PROJECT_PATH,
  publicPath: process.env.NODE_ENV === 'production' ? PROJECT_PATH : '/',
  hash: true,
});
