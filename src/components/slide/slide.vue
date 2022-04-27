<template>
  <div :class="['c-slide', {active: active}]">
    <div class="c-slide__container">
      <div class="slide__header">
        <x-progress
          :active="active"
          @onFinish="$emit('onProgressFinish')"
          class="mt-8 ml-8 mr-8"
        ></x-progress>
        <user
          :username="username"
          :avatarUrl="avatarUrl"
          class="mt-12 ml-12 mr-12"
        ></user>
      </div>
      <div class="slide__content mt-12">
        <div class="slide__loader" v-if="loading">
          <spiner></spiner>
        </div>
        <div class="slide__info ml-18 mr-18" v-else>
          <div v-if="content && content.length"
               class="content__text"
               v-html="content"
          ></div>
          <placeholder v-else :paragraphs="2"></placeholder>
        </div>
      </div>
      <div class="slide__button">
        <x-button
          :size="size_m"
          :theme="buttonTheme"
          :hoverText="hoverText"
          :loading="following.loading"
          @click="$emit(following.status ? 'onUnFollow' : 'onFollow', id)"
        >
          {{following.status ? 'Unfollow': 'Follow'}}
        </x-button>
      </div>
    </div>
    <template v-if="active">
      <button
        v-if="buttonsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <div class="icon icon_arrow">
          <icon name="arrowLeft"></icon>
        </div>
      </button>
      <button
        v-if="buttonsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <div class="icon icon_arrow">
          <icon name="arrowRight"></icon>
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { user } from '../user'
import { spiner } from '../spiner'
import { placeholder } from '../placeholder'
import { xButton } from '../button'
import { icon } from '../../icons'

export default {
  name: 'Slide',
  data () {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  components: {
    xProgress,
    user,
    spiner,
    placeholder,
    xButton,
    icon
  },
  emits: [
    'onPrevSlide',
    'onNextSlide',
    'onProgressFinish',
    'onFollow',
    'onUnFollow'
  ],
  props: {
    active: Boolean,
    loading: {
      type: Boolean
    },
    id: {
      type: Number
    },
    avatarUrl: {
      type: String,
      required: true,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      required: true,
      default: 'Default User'
    },
    content: {
      type: String
    },
    following: {
      status: { type: Boolean },
      loading: { type: Boolean },
      error: { type: Boolean }
    },
    buttonsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  computed: {
    buttonTheme () {
      return this.following.status === true ? 'theme_grey' : 'theme_green'
    }
  }
}
</script>

<style lang="scss" src="./slide.scss" scoped></style>
