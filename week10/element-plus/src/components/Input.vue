<template>
  <input
    ref="inputRef"
    type="text"
  >
</template>

<script>
// import { toRef, watch } from 'vue';
import currency from './Currency';

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { inputRef } = currency(props.modelValue);

    return { inputRef };
  },
};
</script>
