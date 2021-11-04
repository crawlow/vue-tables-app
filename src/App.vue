<template>
  <!-- <layout> -->
  <router-view></router-view>
  <!-- </layout> -->
</template>

<script lang="ts">
import { Vue } from "vue-class-component";


export default class AppComponent extends Vue {
  created() {}
}
</script>
<style>
@import "./assets/styles/bootstrap/bootstrap.min.css";
@import "./assets/styles/main.less";
</style>