'use strict';
const { body } = require('express-validator');

exports.invocationValidator = (req, res, next) => {
    body('invocation')
        .exists().withMessage('invocation is required')
        .isObject().withMessage('invocation must be an object');

    body('invocation.inviteeId')
        .exists().withMessage('name is required');

    body('invocation.name')
        .exists().withMessage('Name is required');

    body('invocation.phone')
        .exists().withMessage('Phone is required');

    body('invocation.status')
        .exists().withMessage('Status is required')
        .isNumeric().withMessage('Status must be a number')
        .custom((value, { req }) => {
            const status = parseInt(value);

            if (status === 1) {
                // If status is Tham gia (1)
                // Make vehicles required and location optional
                body('invocation.vehicles')
                    .exists().withMessage('Vehicles is required');

                body('invocation.location')
                    .optional()
                    .isNumeric().withMessage('Location must be a number');
            } else if (status === -1) {
                // If status is Không tham gia (-1)
                // Make both vehicles and location optional
                body('invocation.vehicles')
                    .optional();

                body('invocation.location')
                    .optional();
            } else {
                // If the status is neither 1 nor -1, both vehicles and location are optional
                body('invocation.vehicles')
                    .optional();

                body('invocation.location')
                    .optional();
            }

            return true;
        });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

