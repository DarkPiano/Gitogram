<template>
  <div class="x-container">
    <div class="c-comment">
      <p>
        <span class="username">{{ username }}</span>
          {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./comment.scss" scoped></style>
