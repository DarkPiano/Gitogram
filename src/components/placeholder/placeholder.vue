<template>
  <div class="c-placeholder">
    <div class="c-placeholder__img"></div>
    <div class="c-placeholder__p mt-22"
         v-for="(item, ndx) in paragraphs"
         :key="ndx">
      <div class="line line_1"></div>
      <div class="line line_2 mt-8"></div>
      <div class="line line_3 mt-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs: {
      type: Number
    }
  }
}
</script>

<style lang="scss" src="./placeholder.scss" scoped></style>
