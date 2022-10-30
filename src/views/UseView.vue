<template>
  <div class="content">
    <el-row>

      <el-badge :value="12" class="item">
        <el-popconfirm confirm-button-text='好的' cancel-button-text='点错了' icon="el-icon-info" icon-color="red"
          title="啥也没有？">
          <el-button type="primary" slot="reference" plain>按钮</el-button>
        </el-popconfirm>
      </el-badge>
      <el-button type="success" plain>按钮</el-button>
      <el-button type="info" plain>按钮</el-button>
      <el-button type="warning" plain>按钮</el-button>
      <el-button type="danger" plain disabled>按钮</el-button>
    </el-row>
    <el-row style="margin: 10px 0;">
      <el-link type="success" @click="open">成功链接</el-link>
    </el-row>
    <el-row>
      <el-radio v-model="radio" label="1">1</el-radio>
      <el-radio v-model="radio" label="2">2</el-radio>
      <el-radio disabled v-model="radio" label="3">3</el-radio>
    </el-row>
    <el-row style="margin: 10px 0;">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group :min="1" :max="3" v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city"></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <!--  -->
    <el-autocomplete style="margin: 10px 0;" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
      @select="handleSelect"></el-autocomplete>
    <!--  -->
    <el-input-number v-model="num" :min="1" :max="100" label="描述文字"></el-input-number>
    <!--  -->
    <el-cascader :options="options" style="width: 300px;"></el-cascader>
    <el-switch v-model="value" active-color="#13ce66" @change="handleCheckAllChange" inactive-color="#ff4949">
    </el-switch>
    <!--  -->
    <el-slider v-model="num"></el-slider>

    <!--  -->
    <el-backtop target="" :bottom="100">
      <div style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">
        UP
      </div>
    </el-backtop>
    <!--  -->
    <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/imgs/OIP-C (1).jpg"
            class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">嘎嘎好吃</time>
              <el-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="manual"
                content="啥也没有。"
                v-model="visible">
                <el-button type="text" class="button" slot="reference" @click="visible = !visible">操作按钮</el-button>
              </el-popover>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const cityOptions = ['麻辣烫', '小龙虾', '酸菜鱼', '五花肉'];
export default {
  data() {
    return {
      radio: "1",
      visible: false,
      isIndeterminate: true,
      cities: cityOptions,
      checkedCities: ['麻辣烫'],
      checkAll: false,
      restaurants: [],
      state: '',
      timeout: null,
      num: 1,
      currentDate: new Date(),  
      options: [{
        value: 'zhinan',
        label: '第一',
        disabled: true,
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '第二',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }]
        }]
      }],
      value: true
    }
  },
  methods: {
    open() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    loadAll() {
      return [
        { "value": "茅台", "address": "广州" },
        { "value": "江小白", "address": "天河" },
        { "value": "国窖", "address": "海珠" },
        { "value": "雪花", "address": "白云" },
        { "value": "珠江", "address": "荔湾" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>
<style scoped>
.content {
  padding: 20px;
  background-color: #fff;
}
/*  */
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>