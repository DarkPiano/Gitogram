<template>
  <div class="wrapper-inner">
    <header class="header">
      <div class="x-container">
        <button class="logo-btn"
                @click="$router.push({name: 'feeds'})">
          <logo :color="logo_white"></logo>
        </button>
        <button class="close-btn"
                @click="$router.push({name: 'feeds'})">
          <div class="icon icon_close">
            <icon name="close"></icon>
          </div>
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider :initialSlide="Number($route.params.initialSlide)"></stories-slider>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { logo } from '../../components/logo'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'storiesPage',
  components: {
    icon,
    logo,
    storiesSlider
  },
  data () {
    return {
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  }
}
</script>

<style lang="scss" src="./storiesPage.scss" scoped></style>
