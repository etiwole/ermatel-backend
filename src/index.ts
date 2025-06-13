import type { Core } from '@strapi/strapi';
import slugify from "slugify";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi, menu }: { strapi: Core.Strapi, menu: any }) {
    strapi.documents.use(async (context, next) => {
      const { action, uid, params } = context;

      if (uid === 'api::category.category' && ['create', 'update'].includes(action)) {
        const maybeData = params as { data?: Record<string, any> };
        const data = maybeData.data;

        if (data?.title && !data.slug) {
          data.slug = slugify(data.title, { lower: true, strict: true });
        }
      }

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.register
  },
};
