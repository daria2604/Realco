<template>
  <article class="trend">
    <div class="trend__icon">
      <SvgIconComponent :class="'trend__icon-pic'" :name="iconName"/>
    </div>
    <div class="trend__content">
      <p class="heading trend__title">{{ title }}</p>
      <p class="trend__text">{{ text }}</p>
    </div>
  </article>
</template>

<script>
import SvgIconComponent from './SvgIconComponent.vue';

export default {
    name: 'TrendsCardComponent',
    props: {
        iconName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    components: { SvgIconComponent }
};
</script>

<style lang="scss" scoped>
.trend {
  @include card;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;


  padding: rem(25px) rem(17px);

  @media #{$screen-desktop} {
    height: rem(290px);
    padding: rem(49px) rem(33px);
  }

  &__icon {
    $size: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: rem($size);
    height: rem($size);
    padding-left: rem(8px);
    padding-right: rem(8px);

    border-radius: rem(8px);
    background-color: $color-icon-bg;

    @media #{$screen-tablet} {
      $size: 44px;

      width: rem($size);
      height: rem($size);
    }

    @media #{$screen-desktop} {
      $size: 48px;

      width: rem($size);
      height: rem($size);
    }
  }

  &__content {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: rem(5px);

    margin-top: rem(18px);

    @media #{$screen-tablet} {
      row-gap: rem(17px);
      
      margin-top: rem(24px);
    }

    @media #{$screen-desktop} {

    }
  }

  &__title {
    font-size: rem($font-size-small);
    line-height: 1.4;

    margin-bottom: rem(6px);

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-normal);

      margin-bottom: rem(7px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-big);
      margin-bottom: rem($gap-small);
    }
  }

  &__text {
    font-size: rem($font-size-mini);
    line-height: $line-height-big;

    color: $color-text-tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-base);
    }
  }
}
</style>
