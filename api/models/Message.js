/**
 * Message.js
 *
 * @description :: Represents stored messages
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    content : { type: 'string' }, /* Message content - Encrypted */
    shortcode : { type: 'string' } /* Shortcode to make data accessible */
  }

};

