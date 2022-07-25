'use strict';

const url = require('url');

module.exports = {

    async index(ctx) {

        const { title } = ctx.params
        console.log(title);

        // const valueFromUrl = Object.values(queryObject);
        // console.log(valueFromUrl[0]);

        const result = await strapi.query('course').model.find({
            $text: { $search: title }
        });

        return result;

    }

  
}
