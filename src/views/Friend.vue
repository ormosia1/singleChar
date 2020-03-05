<template>
    <div>
        <p class="title">好友列表</p>
        <div class="singleList" v-show="item.username !='我'" v-for="(item,i) in getFriends" :key="i">
            <img :src="item.img" alt="">
            <div class="info">
                <span> {{item.username}}</span>
                <span> {{item.sex}}</span>
                <span> {{item.age}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },

        computed:{
            getFriends(){
                return this.$store.state.friendsList;
            }
        }
    }
</script>

<style lang="less" scoped>
.title{
    width: 100%;
    // height: 50px;
    // line-height: 50px;
    padding: 10px;
    background: #a2cad6;
    color: #fff;
    margin-bottom: 5px;
    position: fixed;
    top: 0;
    left: 0;
}
.singleList{
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    border: 1px solid #a2cad6;
    background: #a2d6cd;
    color: #fff;
    padding: 5px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }
}
.singleList:first-of-type{
    margin-top: 60px;
}

</style>