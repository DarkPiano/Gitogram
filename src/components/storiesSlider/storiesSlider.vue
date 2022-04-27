<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul
        class="stories__list"
        ref="slider"
      >
        <li
          class="stories__item"
          ref="item"
          v-for="({id, owner, readme, following}, ndx) in trendings"
          :key="id"
        >
          <slide
            :avatarUrl="owner.avatar_url"
            :username="owner.login"
            :content="readme"
            :active="slideNdx === ndx"
            :following="following"
            :loading="slideNdx === ndx && loading"
            :buttonsShown="activeBtns"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            @onFollow="starRepo(id)"
            @onUnFollow="unStarRepo(id)"
          ></slide>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    slide
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      buttonsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data
    }),
    activeBtns () {
      if (this.buttonsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    moveSlide (slideNum) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item[this.slideNdx]).getPropertyValue('width'), 10
      )
      this.slideNdx = slideNum
      this.sliderPosition = -(slideWidth * slideNum)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.buttonsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.buttonsShown = true
        this.loading = false
      }
    },
    async handleSlide (slideNum) {
      this.moveSlide(slideNum)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style lang="scss" src="./storiesSlider.scss" scoped></style>
