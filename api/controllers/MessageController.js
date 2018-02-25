/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /* Create a new message http://localhost:1337/message/create?content=*/
	create: function (req, res) {
  		var params = req.params.all();
  		var generated_shortcode = MessageService.generateToken(), encoded_data = MessageService.encodeData(params.content);
		Message.create({content: encoded_data, shortcode : generated_shortcode}).exec(function createCB(err,created){
	    	return res.json({
	    		status: 200,
	      		url: 'message/read?shortcode=' + generated_shortcode
	    	});
	  	});
	} ,

  /* Read and destroy the message - http://localhost:1337/message/read?shortcode=e0qw7b9 */
	read : function (req, res) {
		var params = req.params.all();
  		Message.findOne({
		  shortcode: params.shortcode
		}).exec(function (err, entry){
			if (err) {
				return res.negotiate(err);
			}
			if (!entry) {
			    return res.notFound('Could not find that message, sorry.');
			}
			/* Message has been found: Now let's delete it */
			Message.destroy({shortcode:params.shortcode}).exec(function (err){
				if (err) {
			    	return res.negotiate(err);
			  	}
			  	sails.log('Message has been deleted, if there were any.');
				return res.view('message/read', {content : MessageService.decodeData(entry.content) });
			});
			/*return res.json({
				status: 200,
				content : MessageService.decodeData(entry.content)
			});*/
		});
	}

};
