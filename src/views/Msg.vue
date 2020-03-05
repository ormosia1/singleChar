<template>
    <div>
        <p class="title">消息界面</p>
        <div class="msg-content">
            <div :class="{personl:true, wo:item.username == '我'}" v-for="(item,index) in getCharMsg" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.msg}}</p>
            </div>
        </div>

        <div class="sendMsg">
            <Select name="msg" v-model="username" style="width:80px">
                <Option v-for="(item,i) in getFriends" :value="item.username" :key="i">{{item.username}}</Option>
            </Select>
            <Input placeholder="要说的话" v-model="msg"/>
            <Button @click="btn(msg,username)" style="width:50px">发送</Button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:'',
                msg:'', //发送的消息
            }
        },
        methods:{
            btn(msg,username){
                console.log(msg,username);
                // 将头像,名称,消息添加到数组
                for(let i of this.$store.state.friendsList){
                    if(i.username == username){
                        console.log(i.img)
                        this.$store.commit('getChar',{username,msg,img:i.img})
                        console.log(this.$store.state.charMsgList)
                    }
                }
            }
        },
        computed:{
            // 获取好友列表
            getFriends(){
                return this.$store.state.friendsList;
            },

            //获取聊天信息
            getCharMsg(){
                return this.$store.state.charMsgList;                
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
// 消息聊天对话
.msg-content{
    margin-top: 50px;
    margin-bottom: 70px;
    overflow: scroll;
    .personl{
        display: flex;
        align-items: center;
        margin: 0 15px 10px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        p{
            height: 28px;
            line-height: 28px;
            padding: 0 10px;
            background: #a2cad6;
            color: #fff;
            width: auto;
            border-radius: 10px;
            margin-left: 10px;
        }
    }
    .wo{
        display: flex;
        flex-direction: row-reverse;
        p{
            background: #6c7990;
            margin-right: 10px;
        }
    }
}
// 发送框
.sendMsg{
    position: fixed;
    bottom: 50px;
    left: 0;
    display: flex;
    justify-content: space-between;
    input{
        flex: 1;
    }
}
</style>