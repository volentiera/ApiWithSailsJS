/**
 * Messages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      type: 'string',
      required: true
    },
    avatar: {
      type: 'string',
      required: true
    },
    msg: {
      type: 'string',
      required: true
    },
  },

};
