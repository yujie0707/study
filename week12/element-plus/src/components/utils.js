const float = /^(-)?(0|[1-9][0-9]*)(\.\d+)?$/;
const floatInputing = /^(-)?(0|[1-9][0-9]*)(\.\d*)?$/;

function add(a, b) {
  const l = Math.max(a.length, b.length);
  const arr_a = [...a].reverse().map((value) => +value);
  const arr_b = [...b].reverse().map((value) => +value);
  const result = [];
  let carry = 0; // 进位
  let i = 0;
  let value_a = 0;
  let value_b = 0;
  while (i < l || carry) {
    let sum = 0;
    let value = 0;
    value_a = arr_a[i] || 0;
    value_b = arr_b[i] || 0;
    sum = value_a + value_b + carry;
    carry = Math.floor(sum / 10);
    value = sum % 10;
    result.push(value);
    i++;
  }
  return result.reverse().join('');
}

export const format = (precision = 2, inputing = false, num) => {
  if (typeof num !== 'string') {
    num = `${num}`;
  }

  const reg = inputing ? floatInputing : float;
  if (!reg.test(num)) return num;
  const point = /\.$/.test(num);
  let [integer, flo] = num.split('.');

  // 处理四舍六入 银行家算法
  if (flo && flo.length > precision) {
    if (precision > 0) {
      const fixed = flo.slice(0, precision);
      const current = fixed.slice(precision - 1);
      const del = flo.slice(precision, precision + 1);
      const remain = parseInt(flo.slice(precision + 1) || 0);

      /**
       * 三种情况进位
       * 1. 1.160 =》 1.2
       * 2. 1.151 =》 1.2
       * 3. 1.150 =》 1.2
       */
      if (
        del > '5'
        || (del === '5' && remain > 0)
        || (del === '5' && remain === 0 && current % 2)
      ) {
        flo = add(fixed, '1');

        // 如果需要向整数位进位
        if (flo.length > fixed.length) {
          integer = add(integer, '1');
          flo = flo.slice(1);
        }
      } else {
        flo = fixed;
      }
    } else {
      const fixed = integer;
      const current = integer.slice(integer.length - 1);
      const del = flo;
      const remain = parseInt(flo || 0);

      /**
       * 三种情况进位
       * 1. 1.60 =》 2
       * 2. 1.51 =》 2
       * 3. 1.50 =》 2
       */
      if (
        del > '5'
        || (del === '5' && remain > 0)
        || (del === '5' && remain === 0 && current % 2)
      ) {
        integer = add(fixed, '1');
      }

      flo = '';
    }
  }
  return `${integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')}${flo ? `.${flo}` : (point ? '.' : '')}`;
};
