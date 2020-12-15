<template>
  <div class="not_found">
    <div class="flex_wrapper">
      <div class="right">
        <div class="not_found_code">404</div>
        <div class="not_found_text">抱歉，你访问的页面不存在</div>
        <router-link replace
                     tag="span"
                     :to="{path: '/'}"
                     class="btn btn_normal btn_go_index">返回首页</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>
