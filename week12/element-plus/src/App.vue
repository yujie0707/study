<template>
  <ul
    v-infinity-scroll="load"
    class="container"
  >
    <li
      v-for="i in count"
      :key="i"
    >
      {{ i }}
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  components: {},

  setup() {
    const count = ref(10);

    const load = () => {
      count.value += 5;
    };

    return {
      count,
      load,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 300px;
  overflow: auto;

  li {
    height: 50px;
    background: rgba($color: #f00, $alpha: 0.3);
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
