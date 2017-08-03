<template>
  <div class="activePublic ">

    <!-- element步骤组件 -->
    <el-steps :space="200" :active="step" class="step">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>
  </div>
</template>

<script>
  import SuperuiList from '../components/superui/SuperuiList.vue'

  export default {
        components:{
          SuperuiList
        }
  }

</script>

<style lang="css">

</style>
