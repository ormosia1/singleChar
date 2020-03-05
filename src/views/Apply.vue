<template>
    <div id="apply">
        <p class="titleP">好友申请列表</p>
        <div class="apply-box">
            <p class="title" v-show="getInfoList.length == 0">暂时没有新的好友申请哦~</p>
            <div class="friend-div"  v-for="(item,i) in getInfoList" :key="i">
                <img :src="item.myHead" alt="">
                <div class="info">
                    <p>
                        <span>{{item.username}}</span>
                        <span> {{item.sex}} </span>
                        <span> {{item.age}} </span>
                        <span>请求添加你为好友</span>
                    </p>
                    <div class="btn-box">
                        <Button @click="accept(item.username,item.sex,item.age,item.myHead,i)">接受√</Button>
                        <Button @click="refuse(i)">拒接×</Button>
                    </div>
                </div>
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

    methods:{
        //接受申请按钮
        accept(name,sex,age,myHead,i){
            // console.log(name,sex,age,i);
            // 添加个人信息
            this.$store.commit('getFriends',{username:name,sex,age,img:myHead})
            //删除个人信息
            this.$store.commit('dropInfo',i);
            console.log(this.$store.state.infoList)
        },
        // 拒绝好友申请
        refuse(index){
            //删除个人信息
            this.$store.commit('dropInfo',index);           
        }
    },
    computed:{
        getInfoList(){
            return this.$store.state.infoList;
        }
    }
};
</script>

<style lang="less" scoped>
.titleP{
    width: 100%;
    padding: 10px;
    background: #a2cad6;
    color: #fff;
    margin-bottom: 5px;
    position: fixed;
    top: 0;
    left: 0;
}
.apply-box{
    padding: 15px;
    margin-top: 30px;
    .friend-div{
        display: flex;
        padding: 5px;
        border: 1px solid #a2cad6;
        background: #a2d6cd;
        margin-bottom: 1px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 15px;
            vertical-align: middle;
        }
        .btn-box{
            margin-top: 8px;
            button:last-child{
                margin-left: 20px;
            }
        }
    }
    .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background: #a2d6cd;
    }
}
</style>