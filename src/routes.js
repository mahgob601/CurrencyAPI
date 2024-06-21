const express = require('express');
const router = express.Router();
const { getExchangeRate } = require('./controller');
/**
 * @swagger
 * /api/exchange-rate:
 *   get:
 *     summary: Get exchange rates
 *     parameters:
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *         required: true
 *         description: The source currency code
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *         required: true
 *         description: The target currency codes separated by commas
 *     responses:
 *       200:
 *         description: Exchange rates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 inr_usd: 0.012085
 *                 inr_eur: 0.011266
 *                 inr_aed: 0.044382
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 error: Missing required query parameters: from, to
 */
router.get('/exchange-rate', getExchangeRate);

module.exports = router;
