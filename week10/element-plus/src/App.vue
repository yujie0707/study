<template>
  <v-input v-model="value" />
</template>

<script>
import { ref, watch } from 'vue';
import VInput from './components/Input.vue';

export default {
  name: 'App',
  components: {
    VInput,
  },

  setup() {
    const value = ref('123456');

    watch(value, () => {
      console.log(value.value);
    });

    return {
      value,
    };
  },
};
</script>
