<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { login as userLogin } from '../api/user'

const router = useRouter()
const isLogin = localStorage.getItem('isLogin')
if (isLogin === 'true') router.push('/home')

const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
    username: '',
    password: '',
    remember: false
})
const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else {
        if (loginForm.username !== '') {
            if (!loginFormRef.value) return
            loginFormRef.value.validateField('username', () => null)
        }
        callback()
    }
}
const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (loginForm.password !== '') {
            if (!loginFormRef.value) return
            loginFormRef.value.validateField('password', () => null)
        }
        callback()
    }
}
const rules = reactive<FormRules>({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
})
const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            userLogin(loginForm)
                .then(data => {
                    console.log('登陆成功', data)
                    localStorage.setItem('isLogin', 'true')
                    router.push('/home')
                }).catch(err => {
                    ElMessage({
                        showClose: true,
                        message: '用户名或验证码错误',
                        type: 'error',
                    })
                })
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<template>
    <el-form ref="loginFormRef" class="login-form" :model="loginForm" :logins="rules" size="large" status-icon>
        <p class="logo">PARDO</p>
        <el-form-item label="账户" prop="username">
            <el-input v-model="loginForm.username" type="username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="login-form-remember-box">
            <el-checkbox label="记住我" name="type" v-model="loginForm.remember" />
        </el-form-item>
        <el-form-item class="login-form-btn-box">
            <el-button class="login-form-btn" type="primary" @click="login(loginFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped>
.logo {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
}

.login-form-remember-box {
    margin: -22px 0 0 40px;
}

.login-form-btn-box {
    flex-direction: column;
    align-items: flex-end;

    .login-form-btn {
        width: 200px;
    }
}
</style>