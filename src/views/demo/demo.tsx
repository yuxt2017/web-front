// tslint:disable
import { Vue, Component, Watch, Provide } from "vue-property-decorator";
import { CreateElement } from 'vue/types/umd';
import {Mixins} from '@/mixins';
import HelloWorld from '../../components/HelloWorld.vue';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
// Todo TSX
import style from './demo.module.scss';

const MenusModule = namespace('menus');
@Component({
  components: {
    HelloWorld
  },
  // 过滤器
  filters: {
    filterFn1() {
      return 'xxxx'
    }
  },
})
export default class Demo extends Mixins {
  // data
  private txt: string = "10";
  private sum: number = 0;
  private foo: boolean = true;

   // 括号里面为别名，如果参数名一致可以省略
  @State user:any;
  @Mutation("setName") setName: any;
  @Mutation("setUserId") setUserId: any;
  @Action("setUserInfo") setUserInfo: any;
  @Getter('userInfo') getterUserInfo: any;
  @MenusModule.State list:any;
  @MenusModule.Getter('menus') getterMenus: any;
  @MenusModule.Mutation setList: any;

  @Provide()
  protected provideKey: string = 'xxxxx'

  // Todo TSX
  render(h: CreateElement) {
    console.log('==========render===========')
    return (
        <div class={style.register}>
          <hello-world msg="hello world" v-model={this.foo} bindFn={this.helloWorldCallBack}></hello-world>
          <el-button type="primary" nativeOnClick={()=>{this.test();}}>主要按钮</el-button>
          <div>checked: {this.foo?'1':'0'}</div>
          <div>父组件provideKey22：{this.provideKey}</div>
        </div>
      );
  }

  // computed
  get getTxt() {
    return this.txt;
  }
  // 生命周期
  mounted():void {
    console.log("mounted", this.$router);
    this.setName(123)
    this.setUserInfo({
      name: 'text',
      userId: 123
    })
    console.log(this.getterUserInfo)
    this.setList([{name: '123'},{name: '234'}])
    console.log(this.list)
  }
  // watch
  @Watch("txt")
  private changeTxt(newTxt: string, oldTxt: string) {
    console.log(`change txt: ${oldTxt} to ${newTxt}`);
  }
  helloWorldCallBack(str: string): void {
    console.log('helloWorldCallBack ' + str);
  }

  // methods
  private add() {
    this.sum++;
    console.log(`sum : ${this.sum}`);
  }
}
