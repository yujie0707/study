export default `
<template>
    <div> {{helloworld}} </div>
</template>

<script>
export default {
    data () {
        return {
            helloworld: '你好 世界'
        }
    }
}
</script>

<style scoped lang="scss">
div {
    color: red;
    font-size: 50px;
    text-align: right;
}
</style>
`;