<template>
  <div class="header-container">
    <el-menu :default-active="$route.path" mode="horizontal" router @select="handleSelect">
      <el-menu-item index="/sunhome">SunHome</el-menu-item>
      <el-menu-item index="/beautylife">BeautyLife</el-menu-item>
      <el-menu-item index="/loveforever">LoveForever</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    console.log('$route.path', this.$route.path)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.header-container {
  height: 70px;
}

.el-menu.el-menu--horizontal {
  text-align: center;
  border-bottom: none !important;
}

.el-menu-item {
  font-size: 3.3rem;
  min-width: 195px;
  padding: 0 12px;
  float: none !important;
  display: inline-block;
}

.el-menu-item:hover {
  font-weight: 900;
  color: #909399 !important;
}

.el-menu-item.is-active:hover {
  color: #303133 !important;
}
</style>
