<template>
  <header>
    <span class="back" @click="back">
      <i class="el-icon-back"></i>
    </span>
    <span class="title">笔记</span>
  </header>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push({path: '/list'})
    }
  }
}
</script>

<style scoped>
header{
  height: 55px;
  line-height: 55px;
  background-color: #409EFF;
  color: #fff;
}
.back{
  font-size: 32px;
  margin: 0 15px;
}
.title{
  font-size: 24px;
  vertical-align: top;
}
</style>
