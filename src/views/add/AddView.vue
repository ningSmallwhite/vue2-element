<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="form.address" placeholder="请输入地址" clearable></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-select v-model="form.age" placeholder="请选择年龄" style="width: 100%;" clearable>
          <el-option :label="'18'" :value="'18'"></el-option>
          <el-option :label="'19'" :value="'19'"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="call">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        address: ''
      },
      status: '',
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ],
        age: [
          { required: true, message: '请选择年龄', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    // validateHandle() {
    //   // let status = null;
    //   this.$refs["form"].validate((val) => {
    //     if (val) {
    //       this.status = true
    //     }else {
    //       this.status = false
    //     }
    //   });
    // },
    onSubmit() {
      if (this.form.name === '' || this.form.age === '' || this.form.address === '') {
        this.$message.error('请填写全部');
      } else {
        this.$emit('transfer', this.form)
      }

    },
    call() {
      this.$emit('transfer', this.dialogVisible)
    }
  }
}
</script>