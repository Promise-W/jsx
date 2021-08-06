<template>
  <div class="app-wrapper">
    <Header />
    <div class="main-container">
      <AppMain />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Header, AppMain, Footer } from './components'

export default {
  components: { Header, AppMain, Footer }
}
</script>

<style lang="scss">
  body {
    font-family: "Meta",Arial,Verdana,sans-serif;
    /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; */
  }

  .main-container {
    width: 70%;
    margin: 0 auto;
  }
</style>
