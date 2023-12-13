const trends = {
  state: {
    trends: [
      {
        id: 0,
        icon: 'house',
        title: 'Find property',
        text: 'Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.',
      },
      {
        id: 1,
        icon: 'receipt',
        title: 'Make a deal',
        text: 'Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.',
      },
      {
        id: 2,
        icon: 'key',
        title: 'Get your keys',
        text: 'Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.',
      },
      {
        id: 3,
        icon: 'payments',
        title: 'Affordable prices',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      },
      {
        id: 4,
        icon: 'description',
        title: 'Less paper work',
        text: 'Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.',
      },
    ]
  },
  getters: {
    getTrends(state) {
      return state.trends;
    }
  },
  mutations: {
  },
  actions: {
  },
}

export default trends;