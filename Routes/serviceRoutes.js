const express = require('express');
const router = express.Router();
const { createServiceController, updateServiceController, deleteServiceController } = require('../controllers/service.controller');
const bodyParser = require('body-parser');
const { isAdmin } = require('../middlewares/authMiddleware');
router.use(bodyParser.json());

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: API endpoints for managing services
 */

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid request body or missing required fields
 */
router.post('/services', isAdmin, createServiceController);

/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: Update a service
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Service successfully updated
 *       404:
 *         description: Service not found
 *       500:
 *         description: Some server error
 */
router.put('/services/:id', isAdmin, updateServiceController);

/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Delete a service
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       204:
 *         description: Service successfully deleted
 *       404:
 *         description: Service not found
 *       500:
 *         description: Some server error
 */
router.delete('/services/:id', isAdmin, deleteServiceController);

module.exports = router;
