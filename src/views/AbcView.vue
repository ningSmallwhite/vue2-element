<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img class="cobot" :src="item.src" alt="图片丢失了" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
    <p>-----------------------------------</p>
    <div id="app">
      <el-input placeholder="请输入内容" class="my_ipt"></el-input>
      <el-button type="primary">添加事项</el-button>
      <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="info">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <span>0条剩余</span>
        <el-button type="primary">添加事项</el-button>
        <el-button type="primary">添加事项</el-button>
        <el-button type="primary">添加事项</el-button>
        <el-button type="primary">添加事项</el-button>
      </div>
    </div>


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
      ],
      list: [
        {
          id: 0,
          info: 'Racing car sprays burning fuel into crowd.',
          done: false
        },
        { id: 1, info: 'Japanese princess to wed commoner.', done: false },
        {
          id: 2,
          info: 'Australian walks 100km after outback crash.',
          done: false
        },
        { id: 3, info: 'Man charged over missing wedding girl.', done: false },
        { id: 4, info: 'Los Angeles battles huge wildfires.', done: false }
      ]
    }
  },
  props: {
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete() {

    }
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


#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
