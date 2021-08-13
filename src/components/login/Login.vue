<template>
  <div class="login-container">
    <!-- <Form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      用户名:
        <Input  v-model="form.username"></Input>
      密码:
        <Input  v-model="form.password"></Input>
        <Button type="primary" @click="onSubmit">登录</Button>
      
    </Form> -->
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="login-form">
      <Form-item prop="user">
        <Input type="text" v-model="form.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="form.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="onSubmit('formInline')">登录</Button>
      </Form-item>
    </Form>
  </div>
</template>

<style scoped>
.login-form {
  width: 350px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/login/background.jpg");
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style>
    
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>