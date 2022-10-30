<template>
  <div class="content">
    <el-timeline>
      <el-timeline-item timestamp="2022/10/27" placement="top">
        <el-card>
          <h4>时间</h4>
          <p>2022-10-27</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/10/27" placement="top">
        <el-card>
          <h4>时间</h4>
          <p>2022/10/28</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item 
        placement="top" 
        v-for="(activity, index) in activities" 
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        <el-card>
           {{activity.content}}
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activities: [{
          content: '添加图标',
          timestamp: '昨天',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '添加颜色',
          timestamp: '今天',
          color: '#0bbd87'
        }, {
          content: '尺寸',
          timestamp: '明天',
          size: 'large',
          color: '#0sbd87'
        }, {
          content: '默认',
          color: '#2bb557',
          timestamp: '后天'
        }]
      };
    }
  };
</script>
<style scoped>
  .content {
    background-color: #fff;
    padding: 20px;
  }
</style>