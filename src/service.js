const axios = require('axios');

const fetchExchangeRate = async (from, targets) => {
  const options = {
    method: 'POST',
    url: 'https://api.apyhub.com/data/convert/currency/multiple',
    headers: {
      'Content-Type': 'application/json',
      'apy-token': "APY0MC3JkGdPBEuC6O6jfb7zNbv6uImpSdhIjkvbteFIzAJyiLbcxIREQSAVXJloVBcOR"
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
