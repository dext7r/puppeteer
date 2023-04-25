/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-04-24 13:32:04
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-04-24 23:22:19
 * @FilePath: \puppeteer\src\serve\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

const { startCrawling } = require('../utils');

async function main() {
  try {
    await startCrawling();
  } catch (error) {
    console.error(error);
  }
}

main();
