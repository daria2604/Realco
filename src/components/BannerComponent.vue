<template>
  <section class="banner">
    <div class="banner__container">
      <div class="banner__image">
        <img
            class="banner__image-pic"
            :src="require(`@/assets/images/${image}`)"
            :alt="image"
          />
      </div>
      <div class="banner__content">
        <p class="banner__heading section__heading">{{ title }}</p>
        <p class="banner__text text">{{ text }}</p>
        <ButtonComponent
          :design="'colored'"
          :size="'small'"
          :text="buttonText"
          :type="'about'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  components: {
    SvgIconComponent,
    ButtonComponent,
  },
  data() {
    return {
      title: 'Find house for your family in minutes',
      text: `Aenean sodales mauris quis tellus facilisis, vel mattis magna. 
        Interdum curabitur eget aliquam elit in mauris purus.`,
      image: 'lead-img.jpeg',
      buttonText: 'Find property',
    };
  },
};
</script>

<style lang="scss">
.banner {
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: $cararra;
  box-shadow: $box-shadow-huge;

  z-index: 1;

  @media #{$screen-tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    box-shadow: none;
  }

  &__container {
    @media #{$screen-tablet} {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media #{$screen-desktop} {
      justify-items: self-end;
      margin-left: rem(100px);
    }
  }

  &__image {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: rem(287px);

    overflow: hidden;

    @media #{$screen-tablet} {
      order: 2;
      height: rem(358px);
    }

    @media #{$screen-desktop} {
      height: rem(604px);
    }
  }

  &__wrap {
    @include position-absolute;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: rem(18px) rem(20px) rem(36px);

    @media #{$screen-tablet} {
      display: block;

      padding: rem(30px) rem(34px) rem(71px);
      
    }

    @media #{$screen-desktop} {
      padding: rem(90px) rem(244px) rem(146px) 0;
    }
  }

  &__heading {
    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem(28px);
      line-height: $line-height-mini;
      letter-spacing: rem(0.4px);

      width: rem(300px);
    }

    @media #{$screen-desktop} {
      font-size: rem(40px);

      width: rem(420px);
    }

    &-container {
      row-gap: rem(17px);

      @media #{$screen-tablet} {
        align-items: flex-start;
        row-gap: rem(8px);
      }

      @media #{$screen-desktop} {
        row-gap: rem(18px);
      }
    }

    &--underline {
      &-pic {
        width: rem(150px);
        height: rem(5px);

        @media #{$screen-tablet} {
          width: rem(204px);
          height: rem(8px);
        }

        @media #{$screen-desktop} {
          width: rem(340px);
          height: rem(13px);
        }
      }
    }
  }

  &__text {
    @include truncate(6);

    font-size: rem($font-size-mini);
    line-height: $line-height-medium;
    text-align: center;

    margin: rem(10px) 0;

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem(13px);
      text-align: left;

      width: rem(260px);
      margin-top: rem(15px);
      margin-bottom: rem(20px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-base);

      width: rem(420px);
      margin-top: rem(36px);
      margin-bottom: rem(50px);
    }
  }

  &__button {
    padding: rem(8px) rem(24px);
    border-radius: rem(4px);

    @media #{$screen-desktop} {
      padding: rem(12px) rem(36px);
    }

    &-text {
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
}
</style>
