<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { login as userLogin } from '../api/user'

const router = useRouter()

// 检查登录信息自动跳转
if (localStorage.getItem('isLogin') != '') router.push('/home')

const loginFormRef = ref<FormInstance>()
const isLogin = ref(false)
const loginBtnText = ref('登录')
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
    formEl.validate(valid => {
        if (valid) {
            isLogin.value = true
            loginBtnText.value = '登录中'
            userLogin(loginForm)
                .then(res => {
                    const { data } = res
                    ElMessage({
                        message: '登录成功',
                        type: 'success',
                    })
                    localStorage.setItem('isLogin', data.token)
                    router.push('/home')
                }).catch(err => {
                    ElMessage({
                        message: err,
                        type: 'error',
                    })
                }).finally(() => {
                    isLogin.value = false
                    loginBtnText.value = '登录'
                })
        } else {
            ElMessage({
                showClose: true,
                message: 'Submit Error',
                type: 'error',
            })
            return false
        }
    })
}
</script>

<template>
    <el-card class="login-box">
        <el-form ref="loginFormRef" class="login-form" :model="loginForm" :logins="rules" size="large" status-icon>
            <p class="logo">PARDO</p>
            <el-form-item label="" prop="username">
                <el-input v-model="loginForm.username" type="username" placeholder="用户名/手机/邮箱" autocomplete="off" />
            </el-form-item>
            <el-form-item label="" prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="密码" autocomplete="off" />
            </el-form-item>
            <el-form-item class="login-form-remember-box">
                <el-checkbox label="记住我" name="type" v-model="loginForm.remember" />
            </el-form-item>
            <el-form-item class="login-form-btn-box">
                <el-button class="login-form-btn" type="primary" :loading="isLogin" :disabled="isLogin"
                    @click="login(loginFormRef)">{{ loginBtnText }}</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style lang="less" scoped>
.login-box {
    width: 360px;

    .logo {
        text-align: center;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 30px;
    }



    .login-form-remember-box {
        margin: -6px 0 6px 0;
    }

    .login-form-btn-box {

        .login-form-btn {
            width: 100%;
        }
    }
}
</style>