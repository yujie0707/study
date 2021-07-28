<template>
  <div id="app">
    <div
      ref="container"
      class="monaco-editor"
    />
    <button @click="submit">
      预览
    </button>
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import axios from 'axios';
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
      src: '',
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
    },

    async submit() {
      const value = this.monacoEditor.getValue();
      console.log(value);
      const { data } = await axios.get('/base/test', { params: { html: value } });
      this.src = data;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
}

iframe {
  height: 100%;
  flex: 1;
}

button {
  position: absolute;
  top: 0;
  left: 52%;
}

.monaco-editor {
  width: 50%;
  height: 100%;
}
</style>
