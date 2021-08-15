<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">公司介绍</el-menu-item>
    <el-menu-item index="3" >产品管理</el-menu-item>
    <el-menu-item index="4"><a href="" target="_blank">公司文化</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Vheader'
}
</script>

<style scoped>

</style>
