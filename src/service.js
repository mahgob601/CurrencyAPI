const axios = require('axios');

const fetchExchangeRate = async (from, targets) => {
  const options = {
    method: 'POST',
    url: 'https://api.apyhub.com/data/convert/currency/multiple',
    headers: {
      'Content-Type': 'application/json',
      'apy-token': process.env.APY_TOKEN
    },
    data: { source: from, targets: targets }
  };

  const response = await axios.request(options);
  if (response.data) {
    return response.data;
  } else {
    throw new Error('Failed to fetch exchange rate');
  }
};

module.exports = {
  fetchExchangeRate,
};
