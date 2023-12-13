<template>
  <PageContainerComponent :breadcrumbs="breadcrumbs" :heading="heading">
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

      <ul
        class="articles__list articles__list--locations"
        v-if="tabs[1].isActive"
      >
        <li
          class="articles__item"
          v-for="location in locations"
          :key="location.id"
        >
          <LocationComponent :title="location.title" />
        </li>
      </ul>
    </div>
  </PageContainerComponent>
</template>

<script>
import ArticleCardComponent from '@/components/ArticleCardComponent.vue';
import LocationComponent from '@/components/LocationComponent.vue';
import PageContainerComponent from '@/components/PageContainerComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';

export default {
  name: 'ArticlesView',
  components: {
    PageContainerComponent,
    TabsComponent,
    ArticleCardComponent,
    LocationComponent
},
  computed: {
    articles() {
      return this.$store.getters['getArticles'];
    },
    locations() {
      return this.$store.getters['getLocations'];
    }
  },
  data() {
    return {
      breadcrumbs: [
        {
          page: 'Main',
          path: '/',
        },
        {
          page: 'Blog',
          path: '/articles',
        },
      ],
      heading: 'Blog',

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
};
</script>

<style lang="scss"></style>
