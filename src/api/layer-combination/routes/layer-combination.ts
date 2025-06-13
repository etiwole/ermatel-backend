export default {
  routes: [
    {
      method: 'GET',
      path: '/layer_combinations',
      handler: 'layer-combination.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/layer_combinations/:id',
      handler: 'layer-combination.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/layer_combinations',
      handler: 'layer-combination.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/layer_combinations/:id',
      handler: 'layer-combination.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/layer_combinations/:id',
      handler: 'layer-combination.delete',
      config: {
        policies: [],
      },
    },
  ],
};
