export default {
  routes: [
    {
      method: 'GET',
      path: '/color_profiles',
      handler: 'color-profile.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/color_profiles/:id',
      handler: 'color-profile.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/color_profiles',
      handler: 'color-profile.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/color_profiles/:id',
      handler: 'color-profile.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/color_profiles/:id',
      handler: 'color-profile.delete',
      config: {
        policies: [],
      },
    },
  ],
};
