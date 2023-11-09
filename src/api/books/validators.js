const Joi = require("joi");

exports.create = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
})

exports.update = Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    summary: Joi.string().optional(),
})