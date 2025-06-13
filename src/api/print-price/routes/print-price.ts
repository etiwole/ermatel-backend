export default {
  routes: [
    {
      method: 'GET',
      path: '/print_prices',
      handler: 'print-price.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/print_prices/:id',
      handler: 'print-price.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/print_prices',
      handler: 'print-price.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/print_prices/:id',
      handler: 'print-price.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/print_prices/:id',
      handler: 'print-price.delete',
      config: {
        policies: [],
      },
    },
  ],
};
