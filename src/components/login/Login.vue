<template>
  <div class="login-container">
    <Form
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
      inline
      class="login-form"
    >
      <Form-item prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </Form-item>
    </Form>
  </div>
</template>

<style scoped>
.login-form {
  width: 750px;
  margin: 360px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
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
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(123);
      this.$axios.post('/login.do', {
        username: this.formInline.user,
        password: this.formInline.password
      }).then(successResponse => {
        console.log(successResponse)
      }).catch(failResponse => {
        console.log(failResponse)
      })
    },
  },
};
</script>