const reviews = {
  state: {
    reviews: [
      {
        id: 0,
        name: 'Michael Webb',
        about: 'Customer',
        text: 'Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.',
      },
      {
        id: 1,
        name: 'Amber Keene',
        about: 'Customer',
        text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor.',
      },
      {
        id: 2,
        name: 'Sarah Tarleton',
        about: 'Customer',
        text: 'Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl.',
      },
    ]
  },
  getters: {
    getReviews(state) {
      return state.reviews;
    }
  },
  mutations: {
  },
  actions: {
  },
}

export default reviews;