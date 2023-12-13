const locations = {
  state: {
    locations: [
      {
        id: 0,
        title: 'San Francisco, CA',
      },
      {
        id: 1,
        title: 'Los Angeles, CA',
      },
      {
        id: 2,
        title: 'San Diego, CA',
      },
      {
        id: 3,
        title: 'New York, NY',
      },
      {
        id: 4,
        title: 'Las Vegas, NV',
      },
      {
        id: 5,
        title: 'Miami, FL',
      },
    ]
  },
  getters: {
    getLocations(state) {
      return state.locations;
    }
  },
  mutations: {},
  actions: {},
};

export default locations;
