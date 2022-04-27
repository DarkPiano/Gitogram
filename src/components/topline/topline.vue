<template>
  <div class="c-topline">
    <div class="x-container">
      <div class="headline">
        <slot name="headline" />
      </div>
      <div class="content" v-if="$slots.content">
<!--        если нет контента, то блок не отобразится -->
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topline'
}
</script>

<style lang="scss" src="./topline.scss" scoped></style>
