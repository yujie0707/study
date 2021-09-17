export default {
  input: {
    name: '输入框',
    render: ({ label, type, placeholder }) => (
      <el-form-item label={ label }>
        <el-input type={ type } placeholder={ placeholder } />
      </el-form-item>
    ),
  },
  select: {
    name: '选择框',
    render: () => <el-select placeholder="请选择"></el-select>,
  }
}