<template>
  <div class="index">
    <SiteTopBar/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
