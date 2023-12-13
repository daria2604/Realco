<template>
  <svg :class="className">
    <use :xlink:href="iconPath"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIconComponent',

  props: {
    name: {
      type: String,
      required: true
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/svg/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return 'icon icon-' + this.name;
    }
  }
};
</script>

<style lang="scss">
  .icon {
    display: block;
    color: currentColor;

    &__logo {
      &--footer {
        width: rem(93px);
        height: rem(18px);

        &:hover {
          transition: $transition;
        }

        @media #{$screen-desktop} {
          width: rem(135px);
          height: rem(26px);
        }
      }
    }
  }
</style>
