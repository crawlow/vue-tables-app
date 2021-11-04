<template>
  <header class="header">
    <div class="container-name">
      <span class="name">PRO<span class="red-name">JECT</span></span>
      <img src="~@assets/icons/arrow.svg" alt="arrow">
    </div>
    <div class="user-info">
      <img src="~@assets/icons/avatar.svg" alt="avatar">
      <div class="user-name-container">
        <span class="user-name">annaivanova</span>
        <span class="quit" @click="logout">выйти</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "layout-header",
})
export default class LayoutHeaderUser extends Vue {
  logout() {
    this.$router.push({ name: "login" });
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif+Caption&display=swap');
.header {
  height: 74px;
  background: #232235;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  margin-right: 26px;
}

.user-name-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 19px;
}

.user-name {
  color: #BAC6DA;
  font-size: 15px;
  line-height: 18px;
}

.quit {
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #FF0000;
  cursor: pointer;
}

.container-name{
  margin-left: 42px;
  width: 273px;
  height: 74px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #34353E;
}

.name {
  font-family: 'PT Serif Caption', serif;
  font-size: 24px;
}

.red-name {
  color: #FF0000;
}
</style>