module.exports = {
  routes: [
    {
      method: "POST",
      path: "/global/xlsx-upload",
      handler: "global.upload",
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      }
    },
  ],
};