
'use strict';
const { body } = require('express-validator');

exports.invocationValidator = [
    body('invocation')
        .exists().withMessage('invocation is required')
        .isObject().withMessage('invocation must be an object'),
    body('invocation.inviteeId').exists()
        .withMessage('name is required'),
    body('invocation.name').exists()
        .withMessage('Name a required'),
    body('invocation.phone').exists()
        .withMessage('Phone a required'),
    body('invocation.status').exists()
        .withMessage('Status a required')
        .isNumeric()
        .withMessage('Status must be select'),
         // Make vehicles required
    body('invocation.vehicles')
    .exists().withMessage('Vehicles is required'),

    // Make location optional
    body('invocation.location')
    .optional()
    .isNumeric().withMessage('Location must be a number')     
]; 