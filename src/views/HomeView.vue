<template>
  <div class="content">
    <div>
      <div :class="{cur:curindex == index}" class="yiji" v-for="(item1, index) in categoryList" :key="item1.categoryId">
        <span @mouseover="changIndex(index)" @mouseout="outIndex">{{ item1.categoryName }}</span>
        <div class="erji" v-for="item2 in item1.categoryChild" :key="item2.categoryId">
          <span class="erji-caidan">{{ item2.categoryName }}</span>
          <div class="erji" v-for="item3 in item2.categoryChild" :key="item3.categoryId">
            <span class="erji-caidan">{{item3.categoryName}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------- -->
    <el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="value" :data="data">
    </el-transfer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      curindex: -1,
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
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      }
    })
  },
  methods: {
    changIndex(index){
      this.curindex = index
    },
    outIndex() {
      this.curindex = -1
    }
  }
};
</script>
<style scoped>
.content {
  position: absolute;
  /* left: 58%;
  top: 50%;
  transform: translate(-50%, -50%) */
}
.yiji:hover .erji{
  display: block;
}
.erji {
  display: none;
  margin-left: 200px;
}
.erji-caidan{
  float: right;
  border: 1px solid;
  display: block;
}
.cur {
  background-color: aqua;
}
</style>