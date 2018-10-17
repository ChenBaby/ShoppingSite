<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    "name": 'App',
    mounted () {
        this.$store.dispatch('user/getUserInfo')
            .then(res => {
                if (res.success) {
                    console.log('登录状态接口验证成功')
                    this.$store.commit('user/setUserInfo', res.data)
                } else {
                    if (localStorage.getItem('user') !== '{}') { // 本地保存的登录信息告知已失效
                        this.$message({
                            "type": 'error',
                            "message": res.message
                        })
                        this.$store.commit('user/setUserInfo', {})
                    }
                }
            })
    }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /deep/ .el-header {
      padding: 0;
  }
}
</style>
