// tslint:disable
import Vue from 'vue';
import DialogVue from './dialog.vue';

const Dialog = function() { }
/**
 * 打开弹窗，目前设置在body层，如果需要可以设置在所在的组件内部 document.body更换为组件即可
 * component： 展示的组件
 * option dialog的属性，参考el-dialog
 */
Dialog.show = (component: any, option = null, params: any) => {
    let DialogVueConstructor = Vue.extend(DialogVue);
    let instance: any = new DialogVueConstructor().$mount();
    document.body.appendChild(instance.$el);

    let ComponentConstructor = Vue.extend(component);
    let componentInstance: any = new ComponentConstructor().$mount();
    instance.$nextTick(() => {
        instance.$nextTick(() => {
            if (instance.$refs.dialogBody) {
                instance.$refs.dialogBody.appendChild(componentInstance.$el)
            }
        });
    });

    Object.assign(instance.option, option)
    instance.option.visible = true;
    instance.params = params

    instance.closed = () => {
        document.body.removeChild(instance.$el);
        let data = instance.data;
        instance.onDidClose && instance.onDidClose(data);
    }

    // 传进的组件，定义close方法关闭弹窗，可内部直接调用
    // componentInstance.close = (data) => {
    //     if (instance) {
    //         instance.closeDialog(data)
    //     }
    // }

    componentInstance.$instance = instance;

    return instance;
}


export default Dialog