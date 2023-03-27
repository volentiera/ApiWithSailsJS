/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tittle: {type: 'string', required: true},
    desc: {type: 'string', required: true},
    img: {type: 'string', required: true},
    price: {type: 'number', required: true},
  },

};

