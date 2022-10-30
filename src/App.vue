<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header>Element Ui</el-header>
      <el-container>
        <el-aside width="200px">
          <LeftView></LeftView>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftView from '@/components/LeftView.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    LeftView
  }
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #434a50;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 10px !important;
}

</style>
