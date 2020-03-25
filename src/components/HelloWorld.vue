
<template>
  <div>
    <input type="checkbox" :checked="checked" @change="$emit('balabala', $event.target.checked)">
    <div>子组件provideKey: {{provideKey}}</div>
    <!-- <el-button @click="clickBtn">点击</el-button> -->
    <div><slot></slot></div>
  </div>
</template>

<script lang="tsx">
// tslint:disable
import {
  Component,
  Prop,
  Vue,
  Inject,
  Emit,
  Model
} from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  // ToDo ~ !表示强解析，告诉ts，一定有值
  @Inject("provideKey") private provideKey!: string;
  @Prop() private msg!: string;

  @Model("balabala", { type: Boolean }) private checked!: boolean;

  @Emit() private bindFn(): string {
    console.log("bindFn");
    return "hello";
  }
  // @Prop() private bindFn!: Function;
  // render(h: any) {
  //   return (
  //     <el-button nativeOnClick={()=>{ this.bindFn('3333')}}>
  //       点击helloword组件里面按钮111
  //     </el-button>
  //   );
  // }
  // clickBtn(){
  //   this.bindFn('3333')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
