'use strict';

var mongoose = require('mongoose');
var Boom = require('boom');
var Joi = require('joi');
var crypto = require('crypto');

var lockoutInterval = 60; // seconds
var maxAttemptsBeforeLockout = 5;


exports.showForm = {
    description: 'Returns the login page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false // To stop from redirect loop
        }
    },
    handler: function(request, reply) {

        if (request.auth.isAuthenticated) {
            return reply.redirect('/account');
        }
        reply.view('auth/login');

    }
};

exports.postForm = {
    description: 'Post to the login page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false
        },
        crumb: {
            key: 'crumb',
            source: 'payload', // this tests payload crumb value.
            restful: true // do not need to make Joi validation for crumb.
        }
    },
    validate: {
        payload: { // payload for POST, query for GET
            username: Joi.string().min(3).max(20),
            password: Joi.string().min(6).max(20)
        },
        failAction: function(request, reply, source, error) {
            // Username, passowrd minimum validation failed
            request.session.flash('error', 'Invalid username or password');
            return reply.redirect('/login');
        },
    },
    handler: function(request, reply) {
        if (request.auth.isAuthenticated) {
            return reply.redirect('/account');
        }
        var User = request.server.plugins.sequelize.db.User;
        // sySZ7k7Vef+odY4vQ9hRbAB0E0VW//3KEDjwqYvBzjG0uLMewJ+CmFkUwlk/hjNGmaRCczh3Zfv+9I9a778Xww==
        // console.log(crypto.createHash('md5').update(request.payload.password).digest('hex'));
        // e10adc3949ba59abbe56e057f20f883e
        User.findOne({
            where: {
                username: request.payload.username,
                password: crypto.createHash('md5').update(request.payload.password).digest('hex')
            }
        }).then(function(user) {
            if (user) {
                request.auth.session.set(user);
                return reply.redirect('/account');
            } else {
                // User not fond in database
                request.session.flash('error', 'Invalid username or password');
                return reply.redirect('/login');
            }
        });

    }
};
