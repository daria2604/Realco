<template>
  <SectionComponent :section="'articles'" :title="title" :path="'/articles'">
    <TabsComponent
      :className="'articles'"
      :class="`articles__tabs-list`"
      :color="'orange'"
      :size="'small'"
      :tabs="tabs"
    />
    <div class="articles__content">
      <ul class="articles__list" v-if="tabs[0].isActive">
        <li
          class="articles__item"
          v-for="article in articles"
          :key="article.id"
        >
          <ArticleCardComponent
            :image="article.image"
            :title="article.title"
            :text="article.text"
            :date="article.date"
          />
        </li>
      </ul>

      <ul class="articles__list articles__list--locations" v-if="tabs[1].isActive">
        <li class="articles__item" v-for="location in locations" :key="location.id">
          <LocationComponent
            :title="location.title"
          />
        </li>
      </ul>
    </div>
  </SectionComponent>
</template>

<script>
import ArticleCardComponent from './ArticleCardComponent.vue';
import LocationComponent from './LocationComponent.vue';
import SectionComponent from './SectionComponent.vue';
import TabsComponent from './TabsComponent.vue';

export default {
  name: 'ArticlesComponent',
  components: {
    SectionComponent,
    ArticleCardComponent,
    TabsComponent,
    LocationComponent
},
  data() {
    return {
      title: 'Blog',
      tabs: [
        {
          name: 'Latest posts',
          isActive: true,
        },
        {
          name: 'Locations',
          isActive: false,
        },
      ],
    };
  },

  computed: {
    articles() {
      return this.$store.getters['getArticles'];
    },
    locations() {
      return this.$store.getters['getLocations'];
    }
  },
};
</script>

<style lang="scss">
.articles {
  background-color: $cararra;

  &__content {
    margin-top: rem($gap-normal);
    margin-bottom: rem($gap-normal);

    @media #{$screen-tablet} {
      margin-bottom: 0;
    }

    @media #{$screen-desktop} {
      margin-top: rem($gap-medium);
    }
  }

  &__list {
    @include list-reset;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(13px) rem(15px);

    @media #{$screen-tablet} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: rem($gap-normal);
    }

    @media #{$screen-desktop} {
      column-gap: rem(35px);
    }

    &--locations {
      gap: rem(13px);

      @media #{$screen-tablet} {
        gap: rem(16px);
      }
    }
  }

  &__tabs {
    &-list {
      display: flex;
      justify-content: center;
      column-gap: rem($gap-normal);

      @media #{$screen-tablet} {
        justify-content: flex-start;
        column-gap: rem(12px);
      }
    }
  }
}
</style>
