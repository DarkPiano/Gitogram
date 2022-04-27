<template>
  <div class="c-subscription">
    <div class="user">
      <user
        :type="type"
        :username="username"
        :avatarUrl="avatarUrl"
        :size="avatar_m"
      >
      </user>
    </div>
    <div class="button">
      <x-button
        :theme="following ? 'theme_green' : 'theme_grey'"
        :hoverText="following ? 'Unfollowed' : 'Following'"
        :size="size_s"
        @click="$emit(following ? 'onUnFollow' : 'onFollow', id)"
      >
        {{following ? "Following" : "Unfollowed"}}
      </x-button>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { xButton } from '../button'
export default {
  name: 'Subscription',
  components: {
    user,
    xButton
  },
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      hoverText: 'Unfollowed',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  emits: ['onFollow', 'onUnFollow'],
  props: {
    loading: {
      type: Boolean
    },
    id: {
      type: Number
    },
    type: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" src="./subscription.scss" scoped></style>
