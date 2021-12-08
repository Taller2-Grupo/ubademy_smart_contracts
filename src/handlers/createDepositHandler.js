function schema() {
  return {
    params: {
      type: "object",
      properties: {
        address: {
          type: "string",
        },
        amountInEthers: {
          type: "string",
        },
      },
    },
    required: ["address", "amountInEthers"],
  };
}

function handler({ contractInteraction, walletService }) {
  return async function (req) {
    return contractInteraction.deposit(walletService.getWallet(req.body.address), req.body.amountInEthers);
  };
}

module.exports = { schema, handler };
