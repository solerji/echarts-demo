<template>
<div class="activeChart">
  <div class="activeChart_main">
    <div class="dragging_chart"></div>
    <div class="click_add_chart"></div>
  </div>
   <div class="activeChart_button">
    <button class="button" @click="getMap">返回地图</button>
    <button class="button" @click="getOther">去往其他图</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    getMap: function () {
      let vue = this
      vue.$router.push('/MapChart')
    },
    getOther: function () {
      let vue = this
      vue.$router.push('/OtherChart')
    }
  }
}
</script>

<style scoped>
.activeChart_main {
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(auto-fill, auto-fill);
}
.button {
  margin-left: 90%
}
</style>
