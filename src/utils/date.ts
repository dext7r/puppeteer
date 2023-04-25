/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-04-24 23:25:22
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-04-25 00:01:48
 * @FilePath: \puppeteer\src\utils\date.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

export function getCurrentDate(separator: string = '-') {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${
    day < 10 ? `0${day}` : `${day}`
  }`;
  return formattedDate;
}

export default {
  getCurrentDate,
};
