<template>
  <div class="x-container">
    <button :class="['button', { active: isOpened }]" @click="toggle">
      <span class="text">{{ isOpened ? "Hide issues" : "Show issues" }}</span>
      <span class="icon">
        <icon name="up" />
      </span>
    </button>
  </div>
</template>

<script>
import { icon } from '../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss" scoped></style>
