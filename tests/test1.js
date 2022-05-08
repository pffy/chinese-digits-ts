#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for the ChineseDigits object
 * git      : https://github.com/pffy/chinese-digits-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { ChineseDigits } = require('../.');

console.log('0, %s, %s',
  ChineseDigits.zero.chinese,
  ChineseDigits.zero.pinyin);

console.log('1, %s, %s',
  ChineseDigits.one.chinese,
  ChineseDigits.one.pinyin);

console.log('2, %s, %s',
  ChineseDigits.two.chinese,
  ChineseDigits.two.pinyin);

console.log('3, %s, %s',
  ChineseDigits.three.chinese,
  ChineseDigits.three.pinyin);

console.log('4, %s, %s',
  ChineseDigits.four.chinese,
  ChineseDigits.four.pinyin);

console.log('5, %s, %s',
  ChineseDigits.five.chinese,
  ChineseDigits.five.pinyin);

console.log('6, %s, %s',
  ChineseDigits.six.chinese,
  ChineseDigits.six.pinyin);

console.log('7, %s, %s',
  ChineseDigits.seven.chinese,
  ChineseDigits.seven.pinyin);

console.log('8, %s, %s',
  ChineseDigits.eight.chinese,
  ChineseDigits.eight.pinyin);

console.log('9, %s, %s',
  ChineseDigits.nine.chinese,
  ChineseDigits.nine.pinyin);


console.log('9, %o',
  ChineseDigits.nine);

const obj = ChineseDigits.nine;
console.log('9, %o',obj);
