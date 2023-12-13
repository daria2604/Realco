<template>
  <a href="#" class="socials__link">
    <span class="social">
      <SvgIconComponent :class="`social__icon`" :name="name" />
    </span>
  </a>
</template>

<script>
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'SocialIconComponeent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: { SvgIconComponent },
};
</script>

<style lang="scss" scoped>
.social {
  &:hover > &__icon {
    color: $color-socials-hover;
    transition: all .2s ease;
  }

  &__icon {
    width: rem($icon-size-medium);
    height: rem($icon-size-medium);

    color: $color-socials;
  }
}
</style>

