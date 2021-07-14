/**
 * @description 10进制转62进制
 * @param {Number} num 10进制数
 * @param {Number} precision 小数精度
 * @returns {String}
 * @author yujie
 */
const string10To62 = (num, precision = 10) => {
  const map = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let integer = Math.floor(num);
  let digit = num - integer;
  let result = '';

  while (digit && result.length < precision) {
    const index = Math.floor(digit * 62);
    digit = digit * 62 - index;
    result += map[index];
  }

  if (result) result = '.' + result;

  if (!integer) return '0' + result;

  while (integer) {
    const index = integer % 62;
    integer = Math.floor(integer / 62);
    result = map[index] + result
  }

  return result;
}

