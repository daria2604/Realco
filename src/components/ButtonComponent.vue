<template>
  <button :class="`button button--${size} button--${design} ${type}__button`">
    <span :class="`button__text button__text--${size} ${type}__button-text`">{{ text }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    size: {
      type: String,
    },
    design: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.button {
  display: inline-flex;
  column-gap: rem($gap-small);
  align-items: center;
  padding: 0;

  border: 0;

  cursor: pointer;

  &--colored {
    padding: rem($padding) rem($padding-medium);

    border-radius: rem($border-radius-default);

    background-color: $color-button;
    color: $white;

    &:hover {
      background-color: $color-button-hover;

      transition: $transition;
    }

    &:active:not(:disabled) {
      opacity: $opacity;
      transition: $transition;
    }
  }

  &--big {
    height: rem(50px);
  }

  &--small {
    padding: rem(8px) rem(24px);
    border-radius: rem(4px);

    @media #{$screen-desktop} {
      padding: rem(12px) rem(36px);
    }
  }

  &--custom {
    padding-top: rem(6px);
    padding-bottom: rem(6px);

    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &--simple {
    background: transparent;

    color: $tiber;

    &:hover:not(:disabled) {
      color: $color-button;

      transition: $transition;
    }

    &:active:not(:disabled) {
      opacity: $opacity;
      transition: $transition;
    }
  }

  &--grey {
    color: $tiber;
  }

  &--circular {
    border-radius: 50%;
  }

  &--bordered {
    padding: rem(10px) rem(22px);

    border-radius: rem(6px);

    border: $border-light;
    box-shadow: $box-shadow-small;

    background-color: transparent;
    color: $tiber;
    

    @media #{$screen-desktop} {
      padding: rem(13px) rem(25px);
    }

    &:hover {
      border-color: $tiber;

      transition: $transition;
    }
  }

  &--colored#{&}--disabled {
    background-color: $athens-grey;
  }

  &--disabled {
    cursor: unset;

    color: $heather;
  }

  &__text {
    font-size: rem($font-size-small);
    font-weight: $font-weight-medium;
    line-height: rem(15px);  

    &--small {
      font-size: rem(11px);
      letter-spacing: rem(0.22px);
      font-weight: $font-weight-bold;
      line-height: normal;

      @media #{$screen-tablet} {
        font-size: rem($font-size-mini);
      }

      @media #{$screen-desktop} {
        font-size: rem($font-size-normal);
        letter-spacing: rem(0.36px);
      }
    }
  }

  &__icon {
    $size: 10px;

    display: inline-flex;
    width: rem($size);
    height: rem($size);

    &--medium {
      width: rem($icon-size);
      height: rem($icon-size);
    }

    &--rotated {
      transform: rotate(180deg);
    }
  }
}
</style>
