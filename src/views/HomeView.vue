<template>
  <div class="content">
    <el-button @click="add">修改vuex中的数据</el-button><span>{{count}}</span>
    <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data">
  </el-transfer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    // eslint-disable-next-line
    const generateData = _ => {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都', '长沙'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu', 'changsha'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  },
   mounted() {
    this.$store.dispatch('categoryList')
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    add(){
      this.$store.dispatch('add');
    }
    // 派发action
  }
};
</script>
<style scoped>
.content {
  position: absolute;
  left: 58%;
  top: 50%;
  transform: translate(-50%, -50%)
}
</style>