<template>
    <div class="login-page text-center">
        <el-card class="box-card">
            <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名">
                    <el-input type="text" v-model="name" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="passwd" autoComplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <Footer></Footer>
    </div>

</template>
<script>
import Footer from './Footer.vue'

export default {
  name: 'Login',
  components: {
    Footer
  },
  data: function () {
    return {
      name: '',
      passwd: ''
    }
  },
  methods: {
    login: function () {
      console.log('loginclicked')
    }
  }
}
</script>
<style lang="less" scoped>
  .login-page {
    padding-top: 100px;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
    margin: 0 auto;
  }
</style>
