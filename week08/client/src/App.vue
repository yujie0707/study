<template>
  <div id="app">
    <div
      ref="container"
      class="monaco-editor"
    />
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import html from './html';

export default {
  name: 'App',
  data() {
    return {
      // 主要配置
      option: {
        value: html, // 编辑器的值
        theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
        roundedSelection: false, // 右侧不显示编辑器预览框
        autoIndent: true, // 自动缩进
        language: 'html',
      },
      websocket: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = '';
      // 生成编辑器对象
      this.monacoEditor = monaco.editor.create(this.$refs.container, this.option);

      document.addEventListener('keyup', () => {
        this.submit();
      })

      this.websocket = new WebSocket('ws://localhost:8001');

      this.socketInit();
    },

    socketInit() {
      this.websocket.onopen = () => {
        this.websocket.send('connection');
      };

      this.websocket.onmessage = (event) => {
        console.log(event.data);
        this.monacoEditor.setValue(event.data);
      }
    },

    submit() {
      const value = this.monacoEditor.getValue();
      this.websocket.send(value);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  overflow: hidden;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

.monaco-editor {
  width: 100%;
  height: 100%;
}
</style>
