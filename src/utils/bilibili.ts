/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-04-24 13:18:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-04-25 13:58:25
 * @FilePath: \puppeteer\src\utils\bilibili.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import xCrawl from 'x-crawl';
// import path from 'path';
// import fs from 'fs/promises';

const bilibiliXCrawl = xCrawl({ mode: 'async' });
const { getCurrentDate } = require('./date');

async function startCrawling() {
  const {
    data: { browser, page },
  } = await bilibiliXCrawl.crawlPage('https://www.bilibili.com/guochuang');
  // 存放图片 URL 到 targets
  const elSelectorMap = ['.carousel-inner', '.chief-recom-item'];
  // 获取页面轮播图片元素的 URL
  // eslint-disable-next-line no-await-in-loop, @typescript-eslint/no-shadow
  const urls = await page.$$eval(`${elSelectorMap} img`, (imgEls: HTMLImageElement[]) =>
    imgEls.map((item) => item.src),
  );
  // 将存储目录 `storeDir` 中的 `{}` 符号替换为日期字符串，并拼接成操作系统兼容的格式
  // const storeDir = path.join('.', 'bilibili', getCurrentDate('/'));
  // 判断 storeDir 是否存在，如果不存在就新建
  // try {
  //   await fs.access(storeDir);
  // } catch (error) {
  //   if (error.code === 'ENOENT') {
  //     // 如果文件夹不存在就创建文件夹
  //     await fs.mkdir(storeDir, { recursive: true });
  //     console.log(`创建目录 ${storeDir}`);
  //   } else {
  //     console.error(error);
  //   }
  // }

  // 调用 crawlFile API 爬取图片
  await bilibiliXCrawl.crawlFile({
    targets: [...urls],
    storeDir: `./bilibili/${getCurrentDate('/')}`,
    // storeDir,
  });
  // 关闭页面
  page.close();

  // 关闭浏览器
  browser.close();
}

export { bilibiliXCrawl, startCrawling };
