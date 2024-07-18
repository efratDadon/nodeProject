const express = require('express');
const router = express.Router();
const { createMeetingController, updateMeetingController, deleteMeetingController } = require('../controllers/meeting.controller');
const { isAdmin } = require('../middlewares/authMiddleware');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/**
 * @swagger
 * tags:
 *   name: Meetings
 *   description: API endpoints for managing meetings
 */

/**
 * @swagger
 * /meeting:
 *   post:
 *     summary: Create a new meeting
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               startTime:
 *                 type: string
 *               duration:
 *                 type: number
 *               location:
 *                 type: string
 *               serviceId:
 *                 type: string
 *                 format: ObjectId
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid request body or missing required fields
 */

router.post('/meeting', createMeetingController);

/**
 * @swagger
 * /meeting/{id}:
 *   put:
 *     summary: Update a meeting
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               startTime:
 *                 type: string
 *               duration:
 *                 type: number
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Meeting successfully updated
 *       404:
 *         description: Meeting not found
 *       500:
 *         description: Some server error
 */

router.put('/meeting/:id', isAdmin, updateMeetingController);

/**
 * @swagger
 * /meeting/{id}:
 *   delete:
 *     summary: Delete a meeting
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       204:
 *         description: Meeting successfully deleted
 *       404:
 *         description: Meeting not found
 *       500:
 *         description: Some server error
 */

router.delete('/meeting/:id', isAdmin, deleteMeetingController);

module.exports = router;
