<template>
  <section :class="`section ${section}`">
    <div class="container">
      <div class="section__wrap">
        <header class="section__header">
          <p class="section__heading">{{ title }}</p>
          <router-link
            :to="path"
            class="section__button section__button--header button button--simple button--grey"
            :class="!hasButton ? 'section__button--hidden' : ''"
          >
            <span class="section__button-text">View all</span>
            <span class="button__icon section__button-icon">
              <SvgIconComponent
                :name="`right-arrow`"
                :class="`section__button-icon-pic`"
              />
            </span>
          </router-link>
        </header>
        <slot></slot>
        <router-link
          :to="path"
          class="section__button section__button--footer button button--simple button--grey"
          :class="!hasButton ? 'section__button--hidden' : ''"
        >
          <span class="section__button-text">View all</span>
          <span class="button__icon section__button-icon">
            <SvgIconComponent
              :name="`right-arrow`"
              :class="`section__button-icon-pic`"
            />
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'SectionComponent',
  components: { SvgIconComponent },
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: '/',
    },
    hasButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.section {
  &:last-of-type & {
    &__wrap {
      padding-bottom: rem(100px);

      @media #{$screen-tablet} {
        padding-bottom: rem(150px);
      }
    }
    
  }
  &__wrap {
    padding-top: rem(40px);
    padding-bottom: rem(60px);

    @media #{$screen-tablet} {
      padding-top: rem(50px);
    }

    @media #{$screen-desktop} {
      padding: rem(100px) 0;
    }
  }
  

  &__header {
    margin-bottom: rem($gap-normal);

    @media #{$screen-tablet} {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: rem($gap-medium);
    }

    @media #{$screen-desktop} {
      margin-bottom: rem(60px);
    }
  }

  &__heading {
    font-size: rem($font-size-normal);
    font-weight: $font-weight-bold;
    line-height: $line-height-mini;

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem(22px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-huge);
    }

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: rem(8px);

      @media #{$screen-tablet} {
        align-items: flex-start;
      }
    }

    &--underline {
      &-pic {
        width: rem(102px);
        height: rem(4px);

        @media #{$screen-tablet} {
          width: rem(143px);
          height: rem(6px);
        }

        @media #{$screen-desktop} {
          width: rem(262px);
          height: rem(11px);
        }
      }
    }
  }

  &__button {
    column-gap: rem(12px);

    &:hover {
      text-decoration: none;
    }

    &--footer {
      display: flex;

      @media #{$screen-tablet} {
        display: none;
      }
    }

    &--header {
      display: none;

      @media #{$screen-tablet} {
        display: flex;
      }
    }

    &--hidden {
      display: none;
    }

    &-text {
      font-size: rem($font-size-mini);
      font-weight: $font-weight-bold;
      line-height: 1.4;
      letter-spacing: rem(0.24px);

      @media #{$screen-tablet} {
        font-size: rem($font-size-small);
      }

      @media #{$screen-desktop} {
        font-size: rem($font-size-normal);
        letter-spacing: rem(.36px);
      }
    }

    &-icon {
      width: rem(24px);
      height: rem(24px);

      @media #{$screen-tablet} {
        width: rem(30px);
        height: rem(30px);
      }

      @media #{$screen-desktop} {
        width: rem(36px);
        height: rem(36px);
      }
    }
  }
}
</style>
