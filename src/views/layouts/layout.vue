<template>
  <div class="layout">
    <layout-header></layout-header>
    <div class="container-custom">
      <layout-sidebar></layout-sidebar>
      <div class="content">
        <slot>
          <router-view/>
        </slot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LayoutHeader from "@layouts/layout-header.vue";
import LayoutSidebar from "@layouts/layout-sidebar.vue";
@Options({
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  name: 'layout'
})
export default class Layout extends Vue {
}
</script>
<style lang="less">
body {
  @font-face {
    font-family: ProximaNova;
    src: url("~@assets/styles/proxima-nova/fonts/ProximaNova-Regular.eot?dsqk3s#iefix")
        format("embedded-opentype"),
      url("~@assets/styles/proxima-nova/fonts/ProximaNova-Regular.ttf?dsqk3s")
        format("truetype"),
      url("~@assets/styles/proxima-nova/fonts/ProximaNova-Regular.woff?dsqk3s")
        format("woff");
    font-weight: 100;
    font-style: normal;
  }
  margin: 0;
  font-family: ProximaNova;
  font-style: normal;
  font-weight: normal;
}
.content {
  //background: white;
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .container-custom {
    flex-grow: 1;
    background: #ECECEC;
    display: flex;
    overflow-x: auto;
    .content {
      margin: 24px 27px 24px 27px;
      //flex-grow: 1;
    }
  }
}
</style>
