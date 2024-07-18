const express = require('express');
const router = express.Router();
const { createUserController } = require('../controllers/user.controller');
const { isAdmin } = require('../middlewares/authMiddleware');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
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
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User successfully created
 *       400:
 *         description: Invalid request body or missing required fields
 *       500:
 *         description: Some server error
 */
router.post('/user', isAdmin, createUserController);

module.exports = router;
