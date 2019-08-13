<template>
    <div>
        <form action="" v-if="!isReg">
            用户名：<input type="text" v-model="name"><br /><br />
            密码：<input type="password" v-model="password"><br /><br />
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="reg()">注册</button>
        </form>
        <form action="" v-else>
             用户名：<input type="text" v-model="name"><br /><br />
            密码：<input type="password" v-model="password"><br /><br />
            再次输入密码：<input type="password" v-model="repeat"><br /><br />
            <button type="button" @click="addUser()">确定</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isReg:false,
            name:'',
            password:'',
            repeat:''
        }
    },
    methods:{
        login(){
            if(localStorage.getItem("name")===this.name && localStorage.getItem("password") === this.password){
                this.name = ''
                this.password = ''
                this.$router.push('/list')
            }else{
                alert('用户名/密码输入不正确')
            }
            
        },
        reg(){
           this.isReg = true 
        },
        cancel(){
            this.isReg = false
        },
        addUser(){
            if(this.password == this.repeat){
                localStorage.setItem('name',this.name)
                localStorage.setItem('password',this.password)
                this.name = ''
                this.password = ''
                this.repeat = ''
                this.isReg = false
            }else{
                alert("两次输入不一致")
            }
            
        }
    }
}
</script>
<style scoped>

</style>