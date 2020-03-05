<template>
    <div>
      <router-view></router-view>        
        <div class="food">
            <div v-for="item in list" :key="item.name" @click="clickMenu(item.url)">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[
                    {name:'消息',src:require('../assets/imgs/msg.png'),url:'/'},
                    {name:'好友',src:require('../assets/imgs/friend.png'),url:'/friends'},
                    {name:'申请',src:require('../assets/imgs/apply.png'),url:'/apply'},
                    {name:'我的',src:require('../assets/imgs/me.png'),url:'/my'},
                ]
            }
        },

        methods:{
            clickMenu(url){
                //跳转
                this.$router.push(url)
            }
        }
    }
</script>

<style lang="less" scoped>
.food{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #a2d6cd;
    position: fixed;
    bottom: 0;
    left: 0;
    display:  flex;
    justify-content: space-around;
    color: #fff;
}
</style>