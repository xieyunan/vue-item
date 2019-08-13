<template>
    <div>
        <router-view />
        <p @click="addList()">添加</p>
        <ul>
            <li><router-link :to="{name:'list'}">新闻列表</router-link></li>
            <li><router-link :to="{name:'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        addList(){
            this.$router.push('/add')
        }
    }
}
</script>
<style scoped>

</style>