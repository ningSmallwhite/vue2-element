<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img class="cobot" :src="item.src" alt="图片丢失了" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          name: "图1",
          src: require("../assets/imgs/OIP-C (1).jpg"),
        },
        {
          name: "图2",
          src: require("../assets/imgs/OIP-C (2).jpg"),
        },
        {
          name: "图3",
          src: require("../assets/imgs/OIP-C (3).jpg"),
        },
        {
          name: "图4",
          src: require("../assets/imgs/OIP-C.jpg"),
        }
      ]
    }
  },
  props: {
  }
}
</script>

<style scoped lang="less">
.hello {
  margin-top: 15%;
}
.cobot {
  width: 100%;
  height: 100%;
}
</style>
