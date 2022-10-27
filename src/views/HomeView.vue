<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <div class="grid-content">1</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">2</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style scoped>
.grid-content {
    background: #86a0c6;
  }
</style>
