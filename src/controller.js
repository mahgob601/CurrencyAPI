const { fetchExchangeRate } = require('./service');

const getExchangeRate = async (req, res, next) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.status(400).json({ error: 'Missing required query parameters: from, to' });
  }

  try {
    const rate = await fetchExchangeRate(from, to.split(','));
    res.json(rate);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExchangeRate,
};
