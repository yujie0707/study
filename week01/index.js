/**
 * @description 10进制转64进制
 * @param {Number} num 10进制数
 * @param {Number} precision 小数精度
 * @returns {String}
 * @author yujie
 */
const string10To64 = (num, precision = 10) => {
  const map = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+';
  let integer = Math.floor(num);
  let digit = num - integer;
  let result = '';

  while (digit && result.length < precision) {
    const index = Math.floor(digit * 64);
    digit = digit * 64 - index;
    result += map[index];
    console.log(digit);
  }

  if (result) result = '.' + result;

  if (!integer) return '0' + result;

  while (integer) {
    const index = integer % 64;
    integer = Math.floor(integer / 64);
    result = map[index] + result;
  }

  return result;
}
