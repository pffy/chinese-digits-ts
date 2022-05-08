/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseDigits object
 * git      : https://github.com/pffy/chinese-digits-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

interface HanziPinyin {
  chinese: string,
  pinyin: string
}

export class ChineseDigits {

  static readonly chinese: Array<string> = '零一二三四五六七八九'.split('');
  static readonly pinyin: Array<string> = 'líng,yī,èr,sān,sì,wǔ,liù,qī,bā,jiǔ'.split(',');

  static readonly zero: HanziPinyin = {
    chinese: ChineseDigits.chinese[0],
    pinyin: ChineseDigits.pinyin[0]
  };

  static readonly one: HanziPinyin = {
    chinese: ChineseDigits.chinese[1],
    pinyin: ChineseDigits.pinyin[1]
  };

  static readonly two: HanziPinyin = {
    chinese: ChineseDigits.chinese[2],
    pinyin: ChineseDigits.pinyin[2]
  };

  static readonly three: HanziPinyin = {
    chinese: ChineseDigits.chinese[3],
    pinyin: ChineseDigits.pinyin[3]
  };

  static readonly four: HanziPinyin = {
    chinese: ChineseDigits.chinese[4],
    pinyin: ChineseDigits.pinyin[4]
  };

  static readonly five: HanziPinyin = {
    chinese: ChineseDigits.chinese[5],
    pinyin: ChineseDigits.pinyin[5]
  };

  static readonly six: HanziPinyin = {
    chinese: ChineseDigits.chinese[6],
    pinyin: ChineseDigits.pinyin[6]
  };

  static readonly seven: HanziPinyin = {
    chinese: ChineseDigits.chinese[7],
    pinyin: ChineseDigits.pinyin[7]
  };

  static readonly eight: HanziPinyin = {
    chinese: ChineseDigits.chinese[8],
    pinyin: ChineseDigits.pinyin[8]
  };

  static readonly nine: HanziPinyin = {
    chinese: ChineseDigits.chinese[9],
    pinyin: ChineseDigits.pinyin[9]
  };
}
