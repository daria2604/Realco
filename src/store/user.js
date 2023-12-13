const user = {
  state: {
    user:
      {      
        name: 'Lee Know',
        avatar: 'avatar.jpg',
      },
  },
  getters: {
    getUserInfo(state) {
      return state.user;
    }
  },
  mutations: {
  },
  actions: {
  },
}

export default user;