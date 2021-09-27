import { ref, onMounted, getCurrentInstance } from 'vue';
import { format } from './utils';

const currency = format.bind(null, -1, true);

export default function (initValue) {
  const inputRef = ref(null);
  const value = ref(initValue);
  const instance = getCurrentInstance();

  const onInput = (event) => {
    const v = event.target.value.replace(/,/g, '');
    event.target.value = currency(v);
    value.value = v;
    instance.emit('update:modelValue', v);
  };

  onMounted(() => {
    const inputElemnet = inputRef.value;
    inputElemnet.value = currency(value.value);
    inputElemnet.addEventListener('input', onInput);
  });

  return {
    inputRef,
    value,
  };
}
