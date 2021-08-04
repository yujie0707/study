<template>
  <div id="app">
    <header>新闻列表</header>
    <section>
      <menu>
        <div @click="change('a')">新闻1</div>
        <div @click="change('b')">新闻2</div>
      </menu>
      <div id="home"></div>
    </section>
  </div>
</template>

<script>
import { registerMicroApps, start, setDefaultMountApp, loadMicroApp } from 'qiankun';

export default {
  data() {
    return {
      apps: [
        {
          name: 'a',
          entry: '//localhost:3001',
          href: '/news',
          activeRule: '/news',
          container: '#home',
        },
        {
          name: 'b',
          entry: '//localhost:3100',
          href: '/news2',
          activeRule: '/news2',
          container: '#home',
        },
      ]
    };
  },

  computed: {
    appMap() {
      return this.apps.reduce((target, item) => {
        target[item.name] = item;
        return target;
      }, {});
    }
  },

  mounted() {
    this.initQiankun();
  },

  methods: {
    initQiankun () {
      registerMicroApps(this.apps);
      setDefaultMountApp('/news')
      start();
    },
    change(type) {
      loadMicroApp(this.appMap[type]);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

section {
  display: flex;
  height: calc(100vh - 51px);

  menu {
    min-width: 150px;
    padding-left: 20px;
    padding-top: 15px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;

    div {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
  }
}

#home {
  padding: 10px;
}
</style>
