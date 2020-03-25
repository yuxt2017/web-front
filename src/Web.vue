<template>
  <div id="app">
    <el-container class="out-container">
      <el-header style="height:auto">
        <header-bar />
      </el-header>
      <el-container class="container-main-content">
        <el-aside :width="width" class="app-aside">
          <aside-bar />
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import HeaderBar from './components/header-bar/index.vue';
import AsideBar from './components/aside-bar/index.vue';

@Component({
  components: {
    HeaderBar,
    AsideBar,
  },
})
export default class App extends Vue {
  private width: string = '200px';

  protected mounted() {
    this.$eventBus.$on('toggleMenu', (bool: boolean) => {
      this.width = bool ? '64px' : '200px';
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // min-width: 1150px;
}
.app-aside {
  transition: width 0.3s;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.out-container {
  height: 100vh;
  overflow: hidden;
}
.container-main-content {
  overflow: auto;
  flex: 1;
}
.el-main {
  background-color: #edeff2;
  overflow-y: scroll;
}
.el-aside {
  background-color: #0c253d;
}
</style>
