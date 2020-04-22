<template>
    <div class="tree">
        <div class="tree-list">
            <div class="tree-item" v-for="(first,fir) in treeData" :key="fir">
                <div :class="first.label== selected[0] ? 'first-title title-active':'first-title'" @click="changeFirst(first,fir)">
                    <span>{{first.label}}--{{first.flag}}</span>
                    <img v-if="!first.flag" class="title-right" src="@/assets/right.png" alt="">
                    <img v-else-if="first.label== selected[0]" class="title-down" src="@/assets/down-2.png" alt="">
                    <img v-else class="title-down" src="@/assets/down-1.png" alt="">
                </div>
                <div v-show="first.flag">
                    <div :class="first.label== selected[0] && second.label==selected[1]  ? 'item-second item-active': 'item-second'" v-for="(second,sec) in first.children" :key="sec" @click="changeSecond(first,second)">
                        <div class="second-title">{{second.label}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        treeData: Array,
    },
    data(){
        return {
            selected: ['',''],
            // tree: []
        }
    },
    created(){
        let that = this;
        let treeData = this.treeData;
        treeData.map(item=>{
            that.$set(item,'flag', false)
        })
        this.selected = [treeData[0].label,treeData[0].children[0].label];
        treeData[0].flag = true;
        // this.tree = treeData;
        // console.log(this.tree,this.selected)
    },
    methods:{
        changeFirst(first,fir){
            first.flag = !first.flag;
            console.log(fir)
        },
        changeSecond(first,second){
            if(this.selected[1] == second.label){
                return
            }else{
                this.selected = [first.label,second.label];
            }
        }
    },
    watch:{
        // tree(val,oldVal){
        //     console.log(val,oldVal)
        // },
        selected(val,oldVal){
            console.log('111',val,oldVal);
            this.$emit('change-selected',val)
        }
    }

}
</script>

<style lang="scss">
    .tree{
        background: white;
        .tree-item{
            .first-title{
                cursor: pointer;
                padding: 22px 29px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size:16px;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                .title-right{
                    width: 7px;
                    height: 12px;
                }
                .title-down{
                    width: 11px;
                    height: 6px;
                }
            }
            .item-second{
                cursor: pointer;
                padding: 23px 32px 21px 49px;
                font-size:14px;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(102,102,102,1);
            }
            .title-active{
                color: #FF3333;
                font-size:16px;
                font-family:PingFang-SC-Bold,PingFang-SC;
                font-weight:bold;
            }
            .item-active{
                color:rgba(255,51,51,1);
                border-left: 4px solid #FF3333;
                background:rgba(255,240,240,1);
            }
        }
    }
// .second-list-2{
//     height: 0px;
//     transition: height 2s;
// }
    // .second-list{
    //     transition: height 2s ease-in-out;
    //     height: 14px;
    //     padding: 23px 32px 21px 49px;
    //     // animation: 3s linear 1s showTree;
    // }
    
</style>