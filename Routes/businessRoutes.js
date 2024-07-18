const express = require('express');
const router = express.Router();
const { createBusinessController, updateBusinessController } = require('../controllers/business.controller');
const { isAdmin } = require('../middlewares/authMiddleware');
const bodyParser = require('body-parser');
router.use(bodyParser.json());


/**
 * @swagger
 * tags:
 *   name: Businesses
 *   description: The businesses managing API
 */

/**
 * @swagger
 * /businesses:
 *   post:
 *     summary: Create a new business
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: The business was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/businesses', isAdmin, createBusinessController);

/**
 * @swagger
 * /businesses/{id}:
 *   put:
 *     summary: Update an existing business
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The business id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: The business was successfully updated
 *       404:
 *         description: The business was not found
 *       500:
 *         description: Some server error
 */
router.put('/businesses/:id', isAdmin, updateBusinessController);

module.exports = router;
