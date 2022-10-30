<template>
  <el-menu
    default-active="2" 
    class="el-menu-vertical-demo" 
    background-color="#545c64" 
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="/abc">
      <template slot="title">
        <i class="el-icon-date"></i>
        <span>表格</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/about">table</el-menu-item>
        <el-menu-item index="/abc">轮播图</el-menu-item>
        <el-menu-item index="/">窜梭框</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/calendar">
      <i class="el-icon-date"></i>
      <span slot="title">日历</span>
    </el-menu-item>
    <el-menu-item index="/time">
      <i class="el-icon-s-operation"></i>
      <span slot="title">时间线</span>
    </el-menu-item>
    <el-menu-item index="/fold">
      <i class="el-icon-notebook-2"></i>
      <span slot="title">折叠面板</span>
    </el-menu-item>
    <el-menu-item index="/use">
      <i class="el-icon-notebook-2"></i>
      <span slot="title">功能集合</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'LeftView'
}
</script>
<style scoped>

</style>