<template>
  <div id="app">
    <div class="area">
      <div
        class="area-single"
        v-for="(item, key) in config"
        :key="item.name"
        @click="active = key"
      >
        {{ item.name }}
      </div>
    </div>

    <v-show :data="data" />

    <div class="paramter">
      <el-form :model="form" label-width="180px">
        <el-form-item label="label">
          <el-input v-model="form.label" placeholder="请输入label"></el-input>
        </el-form-item>
        <el-form-item label="placeholder">
          <el-input v-model="form.placeholder" placeholder="请输入placeholeder"></el-input>
        </el-form-item>
        <el-form-item label="type">
          <el-select v-model="form.type" placeholder="请选择活动区域">
            <el-option label="text" value="text"></el-option>
            <el-option label="password" value="password"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="format">添加</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
import config from './config/index.jsx';
import VShow from './Show.vue';

export default {
  name: 'App',
  components: {
    VShow
  }, 
  data() {
    return {
      config,
      active: 'input',
      form: {
        label: '',
        type: '',
        placeholder: ''
      },
      data: []
    };
  },
  computed: {
    current() {
      return config[this.active]
    }
  },
  methods: {
    format() {
      this.data.push(JSON.parse(JSON.stringify(this.form)))
    }
  },
};
</script>

