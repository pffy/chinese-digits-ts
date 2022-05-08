# chinese-digits-ts
Chinese digits for converting numbers

  + Implemented in TypeScript
  + Used in the [`ChineseNumber`][num] object for Chinese number conversion


# INSTALL

You can add this module to your node project using:

```
$ npm i -D git+https://github.com/pffy/chinese-digits-ts.git
```

Or you can use:
```
$ npm i -D github:pffy/chinese-digits-ts
```


# PURPOSE

The `ChineseDigits` object provides Chinese digits as characters or Hanyu Pinyin in two convenient ways:

  1. You can use the digits 0 to 9 (Arabic numerals) for programmatic access.
  2. You can use English words for access, too.


# USAGE

Here are a few examples.

If you are calling the digits iteratively or by reference, you can use the Arabic numerals:
```typescript
// 零
ChineseDigits.chinese[0];
```

```typescript
// líng
ChineseDigits.pinyin[0];
```


Alternatively, you can use the English words for the digits for properties or similar cases:
```typescript
// 零
ChineseDigits.zero.chinese;
```


```typescript
// líng
ChineseDigits.zero.pinyin;
```

If you want to carry the Chinese-Pinyin pair as an object through other variables, you can do that, too:

```typescript
// { chinese: '零', pinyin: 'líng' }
ChineseDigits.zero;
```


```typescript
const obj = ChineseDigits.nine;
// { chinese: '零', pinyin: 'líng' }
console.log('9, %o', obj);
```



[num]: https://github.com/pffy/chinese-number-ts
