<template>
  <el-row
    type="flex"
    justify="start"
    class="header-bar"
    :style="headerBarStyle"
  >
    <div class="header-bar-logo">
      <img src="../../assets/logo.png" />
      <span class="title">{{ captain }}</span>
    </div>
    <div class="header-bar-menu">
      <nav-menu
        :data="menuData"
        :background-color="backgroundColor"
        text-color="#fff"
        active-text-color="#00A0FF"
      ></nav-menu>
    </div>
    <div class="header-bar-personal">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <span>用户名</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">退 出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-row>
</template>

<script lang="ts">
// tslint:disable
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import NavMenu from "../nav-menu/index";
import config from "../config";

@Component({
  components: {
    NavMenu
  }
})
export default class HeaderBar extends Vue {
  @Prop({ default: "#2D77E6" }) backgroundColor!: string;

  private menuData: Array<any> = config.headerMenus;
  private captain: string = config.captain;

  get headerBarStyle() {
    return {
      backgroundColor: this.backgroundColor,
      color: "#FFFFFF",
      margin: "0 -20px",
      padding: "0 20px"
    };
  }

  handleCommand(command: string) {
    if (command == "1") {
      // logout(window.location.href);
    }
  }
}
</script>

<style lang="scss">
.header-bar {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu-item {
    font-size: 16px;
  }

  .el-dropdown {
    color: #ffffff;
    line-height: 60px;
  }
}
.header-bar-logo {
  line-height: 60px;
  white-space: nowrap;
  min-width: 180px !important;

  img {
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    margin-left: 10px;
  }
}
.header-bar-menu{
  flex: 1;
}
.header-bar-personal {
  text-align: right;
  cursor: pointer;
}
</style>
