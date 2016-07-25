'use strict';

var Boom = require('boom');

exports.postForm = {
    auth: {
        strategy: 'standard'
    },
    handler: function(request, reply) {
       request.cookieAuth.clear();

        return reply({
            "statusCode": 200,
            "message": "Successfully logged out."
        });
    }
};
