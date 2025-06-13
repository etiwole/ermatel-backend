import {factories} from "@strapi/strapi";

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async upload(ctx) {
    console.log('test upload')
  }
}))