<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  render() {
    const form = ({ label, type, placeholder }) => (
      <el-form-item label={ label }>
        <el-input type={ type } placeholder={ placeholder } />
      </el-form-item>
    )
    return (
      <div class="show">
        <el-form label-width="180px">
          { this.data.map(item => form(item)) }
        </el-form>
      </div>
    )
  },
}
</script>