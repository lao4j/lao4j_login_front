<template>
  <div class="login-container">
    <Form ref="form" :model="form" :rules="rules" inline class="login-form">
      <Form-item prop="username">
        <Input type="text" v-model="form.username" placeholder="Username">
          <Icon type="ios-person" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="form.password" placeholder="Password">
            <Icon type="ios-locked" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="onSubmit('form')">登录</Button>
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
      rules: {
           username: [
             {required: true, message: "用户名不能为空", trigger: 'blur'},
             {min: 3, max: 10, message: "用户名3-5位", trigger: 'blur'}
           ],
           password: [
             {required: true, message: "密码不能为空", trigger: 'blur'},
             {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'}
           ]
       }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>