<template>
  <div id="app">

  </div>
</template>

<script>
import { Ostrich } from './components/index';

export default {
  name: 'App',
  created() {
    new Ostrich({
      url: "/login/loginIndex.action",
      performance: {
        sampleRate: 1,
      },
    }).start();
  }
}
</script>

