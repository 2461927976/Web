<!--
 * @Author: zzj
 * @Date: 2021-06-07 22:29:25
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-10 10:58:53
 * @Description: 
-->
<template>
  <div class="test">
    hello mpvue
    <Icon src="/static/icons/home.svg" size="60" color="#02d199"></Icon>
  </div>
</template>

<script>
import Icon from "@/components/icon/index";
export default {
  name: "index",
  components: {
    Icon,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
$color: red;
.test {
  color: $color;
}
.icon {
  width: 40px;
  height: 40px;
}
</style>