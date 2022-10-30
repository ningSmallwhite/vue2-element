 <template>
  <div class="content">
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" align="center" label="姓名">
      </el-table-column>
      <el-table-column prop="address" align="center" label="地址">
      </el-table-column>
      <el-table-column prop="age" align="center" label="年龄">
      </el-table-column>
    </el-table>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"
      :destroy-on-close="true">
      <From @transfer="getUser" ref="children"></From>
    </el-dialog>
  </div>
</template>

  <script>
  import From from './add/AddView.vue'
  export default {
    data() {
      return {
        dialogVisible: false,
        tableData: [{
          age: '20',
          name: '张三',
          address: '广州'
        }],
        form: {
          name: '',
          age: '',
          address: ''
        }
      }
    },
    components: {
      From
    },
    methods: {
      getUser(msg) {
        // const result = this.$refs['children'].validateHandle()
        // if (result) {
        //   console.log('子组件校验成功')
        // } else {
        //   console.log('子组件校验失败')
        // }
        if (msg !== false) {
          this.form = msg
          this.tableData.push(this.form)
          this.dialogVisible = false
        } else {
          this.dialogVisible = false
        }
      },
      handleClose(done) {
        // this.$confirm('确认关闭？')
        // eslint-disable-next-line
        // .then(_ => {
        done();
        // })
        // eslint-disable-next-line
        // .catch(_ => { });
        this.visible = false;
      },
    }
  }
  </script>
  <style scoped>
    /* .content {
      height: 100%;
      background-color: #fff;
      padding: 20px;
    } */
  </style>