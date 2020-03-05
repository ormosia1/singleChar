<template>
    <div class="my">
        <div class="form">
            <p>昵称：<Input  v-model="username" placeholder="请填写名字" style="width: 200px"/></p>
            <p>性别：<Input  v-model="sex" placeholder="请填写男|女" style="width: 200px"/></p>
            <p>年龄：
                <Select name="age"  v-model="age" style="width: 200px">
                    <Option v-for="count in 23" :value="count" :key="count">{{count+17}}</Option>
                </Select>
            </p>
            <p>头像：
                <img :src="myHead" alt="">
            </p>
            <div class="img">
                <img :src="item.src" v-for="(item,i) in imgList" :key="i" @click="changeImg(item.src)" alt=""/>
            </div>
        </div>
        <Button class="btn" long @click="send()">发送申请</Button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                myHead: '' , //我自己的头像,
                //头像列表
                imgList: [
                    {src: require('../assets/imgs/1.png')},
                    {src:  require('../assets/imgs/2.png')},
                    {src:  require('../assets/imgs/3.png')},
                    {src:  require('../assets/imgs/4.png')},
                    {src:  require('../assets/imgs/5.png')},
                    {src:  require('../assets/imgs/6.png')},
                    {src:  require('../assets/imgs/7.png')},
                    {src:  require('../assets/imgs/8.png')},
                ],
                
                // 个人信息保存
                username:'',
                sex:'',
                age:18,
                img:this.myHead,
                // infoList:[],
            }
        },
        created(){
            console.log(this.$store.state.infoList)
        },



        methods:{
            changeImg(src){
                this.myHead = src;
            },

            // 点击发送按钮
            send(){
                console.log(this.myHead)
                // this.infoList.unshift({username:this.username,sex:this.sex,age:this.age,myHead:this.myHead})
                // 传入vuex
                this.$store.commit('getInfo',{username:this.username,sex:this.sex,age:this.age,myHead:this.myHead})
                // console.log(this.$store.state.infoList)
                //验证
                alert('申请已提交，请等待...')

            }
        }
    }
</script>

<style lang="less" scoped>
.my{
    padding: 20px;
    .form{
        p{
            margin-bottom: 10px;
            select{
                width: 150px;
                option{
                    padding: 0;
                    margin: 0;
                }
            }
        }
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
                vertical-align: middle;
            }
    }
    .btn{
        // width: 100px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 8px;
        color: #fff;
        background: #a2d6cd;
        margin: auto;
        margin-top: 40px;
    }
    // .btn:active{
    //     background: #5cdbc6;
    // }
}
</style>