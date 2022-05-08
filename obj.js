"use strict";
/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseDigits object
 * git      : https://github.com/pffy/chinese-digits-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
exports.ChineseDigits = void 0;
var ChineseDigits = /** @class */ (function () {
    function ChineseDigits() {
    }
    ChineseDigits.chinese = '零一二三四五六七八九'.split('');
    ChineseDigits.pinyin = 'líng,yī,èr,sān,sì,wǔ,liù,qī,bā,jiǔ'.split(',');
    ChineseDigits.zero = {
        chinese: ChineseDigits.chinese[0],
        pinyin: ChineseDigits.pinyin[0]
    };
    ChineseDigits.one = {
        chinese: ChineseDigits.chinese[1],
        pinyin: ChineseDigits.pinyin[1]
    };
    ChineseDigits.two = {
        chinese: ChineseDigits.chinese[2],
        pinyin: ChineseDigits.pinyin[2]
    };
    ChineseDigits.three = {
        chinese: ChineseDigits.chinese[3],
        pinyin: ChineseDigits.pinyin[3]
    };
    ChineseDigits.four = {
        chinese: ChineseDigits.chinese[4],
        pinyin: ChineseDigits.pinyin[4]
    };
    ChineseDigits.five = {
        chinese: ChineseDigits.chinese[5],
        pinyin: ChineseDigits.pinyin[5]
    };
    ChineseDigits.six = {
        chinese: ChineseDigits.chinese[6],
        pinyin: ChineseDigits.pinyin[6]
    };
    ChineseDigits.seven = {
        chinese: ChineseDigits.chinese[7],
        pinyin: ChineseDigits.pinyin[7]
    };
    ChineseDigits.eight = {
        chinese: ChineseDigits.chinese[8],
        pinyin: ChineseDigits.pinyin[8]
    };
    ChineseDigits.nine = {
        chinese: ChineseDigits.chinese[9],
        pinyin: ChineseDigits.pinyin[9]
    };
    return ChineseDigits;
}());
exports.ChineseDigits = ChineseDigits;
