<template>
  <article :class="`about__card about__card--${position}-pic`">
    <div :class="`about__image about__image--${position}`">
      <img
        class="about__image-pic"
        :src="require(`@/assets/images/${image}`)"
        :alt="image"
      />
    </div>
    <div class="about__content">
      <div class="section__heading-container">
        <p class="section__heading about__heading">{{ title }}</p>
      </div>
      <p :class="`about__subheading ${isSubtitleHidden ? 'about__subheading--show' : ''}`">
        {{ subtitle }}
      </p>
      <p class="about__text">{{ text }}</p>
      <div class="about__buttons">
        <ul class="about__buttons-list">
          <li class="about__button">
            <ButtonComponent
              :design="'bordered'"
              :size="'small'"
              :text="buttonText"
              :type="'about'"
            />
            <ButtonComponent
              :design="'simple'"
              :size="'small'"
              :text="'Contact agent'"
              :type="'about'"
            />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'AboutCardComponent',
  components: { SvgIconComponent, ButtonComponent },
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    hasSubTitle: {
      type: Boolean,
      default: false,
    },
    isSubtitleHidden: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__card {
    overflow: hidden;

    border-radius: rem(16px);
    box-shadow: $box-shadow-huge;
    background-color: $white;

    @media #{$screen-tablet} {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-radius: 0;
      box-shadow: none;
    }

    @media #{$screen-tablet} {
      column-gap: rem(80px);
    }
  }

  &__image {
    position: relative;

    width: 100%;
    height: rem(200px);

    overflow: hidden;

    @media #{$screen-tablet} {
      width: rem(600px);
      height: rem(400px);

      border-radius: rem(16px);
    }

    @media #{$screen-desktop} {
      height: rem(600px);
    }
      

    &--right {
      @media #{$screen-tablet} {
        order: 2;
      }
    }
  }

  &__content {
    text-align: center;

    padding: rem(16px) rem($gap-small) rem(22px);

    @media #{$screen-tablet} {
      text-align: left;

      padding: rem($gap-medium) rem($gap-normal) rem($gap-medium) rem($gap-medium);
    }

    @media #{$screen-desktop} {
      padding: 0 rem(80px) 0 0;
    }
  }

  &__subheading {
    display: inline-block;

    font-size: rem($font-size-small);
    font-weight: $font-weight-medium;
    line-height: 1.4;

    margin-top: rem(13px);

    text-align: center;

    @media #{$screen-tablet} {
      font-size: rem($font-size-normal);

      margin-top: rem(15px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-big);

      margin-top: rem($gap-medium);
    }

    &--show {
      display: none;

      @media #{$screen-tablet} {
        display: inline-block;
      }
    }
  }

  &__text {
    font-size: rem(11px);
    line-height: 1.4;

    text-align: left;

    margin-top: rem(10px);

    color: $color-text-tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-mini);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-base);

      margin-top: rem(21px);
    }
  }

  &__buttons {
    &-list {
      @include list-reset;

      margin-top: rem(10px);

      @media #{$screen-tablet} {
        margin-top: rem(15px);
      }

      @media #{$screen-desktop} {
        margin-top: rem(21px);
      }
    }
  }
}
</style>
