<template>
  <div>
    <div class="toggle-btn" :class="{ open: !isCollapse }" @click="toggleBtn">
      <!-- <i class="el-icon-s-unfold"></i> -->
      <img src="@/assets/img/toggle-menu.png" height="14" />
    </div>
    <!-- <aside-menu :data="$store.state.user.menus" :collapse="isCollapse" /> -->
    <aside-menu
      :data="menuData"
      :collapse="isCollapse"
      :text-color="menuStyle.textColor"
      :active-text-color="menuStyle.activeTextColor"
      :background-color="menuStyle.backgroundColor"
    />
  </div>
</template>
<script lang="ts">
// tslint:disable
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import AsideMenu from "../aside-menu";
import config from "../config";

@Component({
  components: {
    AsideMenu
  }
})
export default class AsideBar extends Vue {
  private menuData: Array<any> = config.asideMenus;
  private menuStyle: Object = config.style;
  private isCollapse: Boolean = false;
  private defaulAcitve: string = "/";

  mounted() {
    this.defaulAcitve = this.$route.path;
  }
  handleOpen() {}
  handleClose() {}
  toggleBtn() {
    this.isCollapse = !this.isCollapse;
    this.$eventBus.$emit("toggleMenu", this.isCollapse);
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  color: #81adf0;
  background-color: #0c253d;
  border-right: none;
}
.toggle-btn {
  text-align: center;
  background: #15406a;
  cursor: pointer;
  height: 40px;
  line-height: 14px;
  width: 64px;
  transition: width 0.3s;
  img {
    height: 14px;
    vertical-align: middle;
    position: relative;
    top: 13px;
  }
  &.open {
    width: 200px;
  }
}
</style>
