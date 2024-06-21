// Import the fetchExchangeRate function from the service module
const { fetchExchangeRate } = require('./service');

// Controller function to handle the getExchangeRate endpoint
const getExchangeRate = async (req, res, next) => {
  const { from, to } = req.query;

  // Check if required query parameters are provided
  if (!from || !to) {
    return res.status(400).json({ error: 'Missing required query parameters: from, to' });
  }

  try {
    // Fetch the exchange rate using the provided parameters
    const rate = await fetchExchangeRate(from, to.split(','));
    res.json(rate); // Respond with the fetched rate
  } catch (error) {
    next(error); // Pass errors to the error-handling middleware
  }
};

// Export the controller function
module.exports = {
  getExchangeRate,
};
