<template>
  <div class="nodata type-default">
    <div class="content">
      <img src="@/styles/icons/table_empty.png" alt="no-data">
      <div class="hint-text">{{ text || '暂无数据' }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableEmpty',
  props: {
    text: String
  }
}
</script>
<style lang="scss" scoped>
  .nodata {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      text-align: center;
      img{
          width: 90px;
          height: 75px;
      }
      .hint-text {
        color: #ABBAC9;
          line-height: 1em;
      }
    }
  }
</style>
