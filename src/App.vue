<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted: function() {
    //close loading
    document.getElementById("loading").style.display = "none";
  }
};
</script>

<style lang="less">
#app {
  width: 100%;
  min-height: 100%;
}
</style>
