<template>    
    <article class="review">
      <p class="review__text">"{{ text }}"</p>
      <div class="review__footer">
        <div class="review__user">
          <div class="review__user-avatar">
            <img
              :src="require(`@/assets/images/${avatar}`)"
              :alt="avatar"
              class="review__avatar"
            />
          </div>
          <div class="review__user-info">
            <p class="review__user-name">{{ name }}</p>
            <p class="review__user-about">{{ about }}</p>
          </div>
        </div>
      </div>
    </article>
</template>

<script>
import SvgIconComponent from './SvgIconComponent.vue';

export default {
    name: 'ReviewCardComponent',
    props: {
        avatar: {
            type: String,
            default: 'avatar-plug.svg',
        },
        name: {
            type: String,
            default: 'Пользователь',
        },
        text: {
            type: String,
            required: true,
        },
        about: {
          type: String,
          required: true,
        },
    },
    components: { SvgIconComponent }
};
</script>

<style lang="scss">
.review {
  @include card;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: rem(200px);
  padding: rem($padding-small);

  @media #{$screen-desktop} {
    width: rem(405px);
    height: rem(300px);
    padding: rem(33px);
  }


  &__user {
    display: flex;
    align-items: center;
    column-gap: rem($gap-small);
    
    @media #{$screen-tablet} {
      column-gap: rem(15px);
    }

    @media #{$screen-desktop} {
      column-gap: rem($gap-normal);
    }

    &-name {
      @include truncate(2);

      font-size: rem($font-size-small);
      font-weight: $font-weight-medium;
      line-height: 1.4;

      color: $tiber;

      @media #{$screen-tablet} {
        font-size: rem($font-size-base);
      }
    }

    &-info {
      color: $salt-box;
    }

    &-avatar {
      $size: 36px;
  
      width: rem($size);
      height: rem($size);

      @media #{$screen-tablet} {
        width: rem(48px);
        height: rem(48px);
      }
    }
  }

  &__avatar {
    border-radius: 50%;
  }

  &__text {
    @include truncate(8);

    font-size: rem($font-size-small);
    line-height: 1.4;

    color: $salt-box;

    @media #{$screen-tablet} {
      font-size: rem($font-size-mini);
      line-height: $line-height-medium;
      letter-spacing: rem(.24px);

      -webkit-line-clamp: 7;
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-small);
      line-height: 1.6;
      letter-spacing: rem(.28px);

      margin-left: rem($gap-small);
    }
  }
}
</style>
