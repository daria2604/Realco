const articles = {
  state: {
    articles: [
      {
        id: 0,
        image: 'card-1.jpeg',
        title: 'The 9 best homes in New York',
        text: 'Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.',
        date: 'May 10, 2022',
      },
      {
        id: 1,
        image: 'card-2.jpeg',
        title: 'How to easily buy a house with Realco',
        text: 'Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.',
        date: 'May 10, 2022',
      },
      {
        id: 2,
        image: 'card-3.jpeg',
        title: 'Renting houses - complete guide',
        text: 'Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis. Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.',
        date: 'May 10, 2022',
      },
    ],
  },
  getters: {
    getArticles(state) {
      return state.articles;
    }
  },
  mutations: {
  },
  actions: {
  },
}

export default articles;