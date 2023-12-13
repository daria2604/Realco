const footer = {
  state: {
    links: [
      {
        id: 0,
        text: 'Terms of Service',
      },
      {
        id: 2,
        text: 'Privacy Policy',
      },
    ],
  },
  getters: {
    getLinks(state) {
      return state.links;
    }
  },
  mutations: {},
  actions: {},
};

export default footer;
