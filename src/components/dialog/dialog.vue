<template>
  <el-dialog
    :title="option.title"
    :visible.sync="option.visible"
    :width="option.width"
    :fullscreen="option.fullscreen"
    :top="option.top"
    :modal="option.modal"
    :modal-append-to-body="option.modalAppendToBody"
    :append-to-body="option.appendToBody"
    :lock-scroll="option.lockScroll"
    :custom-class="option.customClass"
    :close-on-click-modal="option.closeOnClickModal"
    :close-on-press-escape="option.closeOnPressEscape"
    :show-close="option.showClose"
    @open="open"
    @opened="opened"
    @beforeClose="beforeClose"
    @closed="closed"
  >
    <div ref="dialogBody"></div>
  </el-dialog>
</template>

<script>
// import ElDragDialog from '@/directive/el-dragDialog'

export default {
  data() {
    return {
      option: {
        visible: false, // 是否显示 Dialog，支持 .sync 修饰符
        title: "Dialog 的标题", // Dialog 的标题
        width: "50%", // Dialog 的宽度
        fullscreen: false, // 是否为全屏 Dialog
        top: "15vh", // Dialog CSS 中的 margin-top 值
        modal: true, // 是否需要遮罩层
        modalAppendToBody: true, // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
        appendToBody: false, // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        customClass: "", // Dialog 的自定义类名
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否可以通过点击 modal 关闭 Dialog
        center: false // 是否对头部和底部采用居中布局
      },
      data: null,
      params: null,
    };
  },

  methods: {
    // Dialog 打开的回调
    open() {
      this.data = null;
    },
    // Dialog 打开动画结束时的回调
    opened() {},
    // Dialog 关闭动画结束时的回调
    closed() {},
    // 关闭前的回调，会暂停 Dialog 的关闭 done 用于关闭 Dialog
    beforeClose(done) {},

    close(data) {
      this.option.visible = false;
      this.data = data;
    }
  }
};
</script>