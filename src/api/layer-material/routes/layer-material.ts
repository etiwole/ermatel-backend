export default {
  routes: [
    {
      method: 'GET',
      path: '/layer_materials',
      handler: 'layer-material.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/layer_materials/:id',
      handler: 'layer-material.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/layer_materials',
      handler: 'layer-material.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/layer_materials/:id',
      handler: 'layer-material.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/layer_materials/:id',
      handler: 'layer-material.delete',
      config: {
        policies: [],
      },
    },
  ],
};
