export default [
  {
    method: 'POST',
    path: '/upload-xlsx-file',
    // name of the controller file & the method.
    handler: 'controller.uploadXlsxFile',
    config: {
      auth: {},
      policies: [],
    },
  },
]
