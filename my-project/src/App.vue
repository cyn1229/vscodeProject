<template>
  <div id ="app">
    <div class="box" @click="fn">盒子</div>
  </div>
</template>

<script>
export default {
  methods: {
    fn(){
      alert("哈哈哈")
    }
  }
}
</script>


<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>