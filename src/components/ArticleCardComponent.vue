<template>
  <article class="article">
    <router-link to="/articles" class="article__link"></router-link>
    <div class="article__image">
      <div class="article__wrap">
        <img
          class="article__image-pic"
          :src="require(`@/assets/images/${image}`)"
          :alt="image"
        />
      </div>
    </div>
    <div class="article__content">
      <span class="article__date">{{ date }}</span>
      <p class="article__title">{{ title }}</p>
      <p class="article__text">{{ text }}</p>
    </div>
  </article>
</template>

<script>
export default {
    name: 'ArticleCardComponent',
    props: {
        image: {
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
        date: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.article {
  @include card; 

  position: relative;

  overflow: hidden;

  cursor: pointer;

  @media #{$screen-desktop} {
    &:hover {
      @include card-hover;
    }
  }

  &__image {
    position: relative;

    width: 100%;

    overflow: hidden;

    &::before {
      $card-width: 160px;
      $card-heigth: 100px;

      display: block;

      padding-top: percentage($card-heigth / $card-width);

      content: '';

      @media #{$screen-desktop} {
        $card-width: 403px;
        $card-heigth: 266px;

        padding-top: percentage($card-heigth / $card-width);
      }
    }

    &-pic {
      @include position-absolute;

      height: 100%;

      object-fit: cover;
    }
  }

  &__wrap {
    @include position-absolute;
  }

  &__link {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    z-index: $z-index-card-link;

    content: '';
  }

  &__content {
    $card-height: 288px;
    $img-height: 146px;

    display: flex;
    flex-direction: column;

    padding: rem($gap-small) rem(12px);
    height: rem($card-height - $img-height);

    text-wrap: balance;

    @media #{$screen-tablet} {
      padding: rem($gap-small);
    }

    @media #{$screen-desktop} {
      $card-height: 480px;
      $img-height: 255px;

      width: rem(403px);
      height: rem($card-height - $img-height);
      padding: rem(24px);
    }
  }

  &__title {
    @include truncate(4);

    font-size: rem($font-size-mini);
    font-weight: $font-weight-medium;
    line-height: 1.4;
    text-wrap: pretty;

    margin-top: rem(17px);
    margin-bottom: rem(9px);

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-small);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-big);
      line-height: $line-height-medium;
    }
  }

  &__text {
    @include truncate(2);

    color: $salt-box;
  }

  &__date {
    display: inline-block;
    align-self: flex-end;

    font-size: rem(11px);
    font-weight: $font-weight-medium;
    line-height: $line-height-big;

    color: rgba($daintree, .35);

    @media #{$screen-desktop} {
      font-size: rem($font-size-small);

      align-self: flex-start;
    }
  }
}
</style>
