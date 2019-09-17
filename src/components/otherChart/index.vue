<template>
<div class="otherChart">
  <div class="otherChart_main">
    <div class="shanghaiIndex_K" id="shanghaiIndex_K"></div>
    <div class="basic_Ra" id="basic_Ra"></div>
  </div>
   <div class="otherChart_button">
    <button class="button" @click="getActive">返回动态图</button>
    <button class="button" @click="getLine">返回首页</button>
  </div>
</div>
</template>

<script>
import { initShanghaiIndexChart } from '@/utils/otherChart/shangahaiIndex.js'
import { initbasicRaChart } from '@/utils/otherChart/basicRa.js'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
    initShanghaiIndexChart('shanghaiIndex_K')
    initbasicRaChart('basic_Ra')
  },
  methods: {
    getLine: function () {
      let vue = this
      vue.$router.push('/')
    },
    getActive: function () {
      let vue = this
      vue.$router.push('/ActiveChart')
    }
  }
}
</script>

<style scoped>
.otherChart_main {
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 20rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(auto-fill, auto-fill);
}
.shanghaiIndex_K, .basic_Ra{
  width: 500px;
  height: 500px;
}
.button {
  margin-left: 90%
}
</style>
