const Joi = require('joi');

const ExportOpenmusicPayloadSchema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportOpenmusicPayloadSchema;
