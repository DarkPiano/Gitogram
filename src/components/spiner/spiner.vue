<template>
  <div class="c-spiner" :class="color"></div>
</template>

<script>
export default {
  name: 'Spiner',
  props: {
    color: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./spiner.scss" scoped></style>
